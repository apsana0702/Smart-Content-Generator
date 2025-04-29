import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentGeneratorComponent } from "./content-generator/content-generator.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContentGeneratorComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Smart-Content-Generator';
}
