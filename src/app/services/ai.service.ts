import { Injectable } from '@angular/core';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class AIService {
  private apiKey = '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';
  private apiUrl = 'https://openrouter.ai/api/v1/chat/completions';
  constructor() { }
  async getGeneratedContent(prompt: string): Promise<string> {
    try {
      const response = await axios.post(this.apiUrl, {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "user", content: prompt }
        ],
        max_tokens: 150,
        temperature: 0.7,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        }
      });
  
      return response.data.choices[0].message.content.trim();
    } catch (error) {
      console.error('Error fetching AI response:', error);
      throw error;
    }
  }
}
