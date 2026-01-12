import { Component } from '@angular/core';
import { ContentComponent } from './content/content.component';
import { AnniversaryComponent } from './anniversary/anniversary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContentComponent,AnniversaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'love-story';
}
