import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import{ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CarouselModule,ButtonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  candles = Array(25).fill(0).map((_, i) => ({ id: i, blown: false }));

blowCandle(candle: any) {
  candle.blown = true;
}


  image = [
    { id: 1, image: 'assets/c1.jpg' },
    { id: 2, image: 'assets/c2.jpg' },
    { id: 3, image: 'assets/c3.jpg' },
    { id: 4, image: 'assets/c4.jpg' },
    { id: 5, image: 'assets/c5.jpg' },
    { id: 6, image: 'assets/c6.jpg' },
    { id: 8, image: 'assets/c7.jpg' },
    { id: 9, image: 'assets/c8.jpg' },
    { id: 1, image: 'assets/c1.jpg' },
    { id: 2, image: 'assets/c2.jpg' },
   
  ];
}
