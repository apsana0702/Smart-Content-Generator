import { Component } from '@angular/core';
import { AIService } from '../services/ai.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-generator',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './content-generator.component.html',
  styleUrls: ['./content-generator.component.css']
})
export class ContentGeneratorComponent {
  contentType: string = '';
  tone: string = '';
  keywords: string = '';
  generatedContent: string = '';
  loading: boolean = false;

  constructor(private aiService: AIService) {}

  generateContent() {
    if (!this.contentType || !this.tone) {
      alert('Please select content type and tone!');
      return;
    }

    this.loading = true;
    const prompt = `Generate a ${this.tone} ${this.contentType} using these keywords: ${this.keywords}`;

    this.aiService.getGeneratedContent(prompt).then(response => {
      this.generatedContent = response;
      this.loading = false;
      console.log('Generated content:', response);
    }).catch(error => {
      console.error(error);
      this.generatedContent = 'Error generating content. Please try again.';
      this.loading = false;
    });
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.generatedContent);
    alert('Content copied to clipboard!');
  }
}
