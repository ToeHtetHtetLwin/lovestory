import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG Imports
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-anniversary',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ProgressBarModule,
    BadgeModule,
    ButtonModule,
    TagModule,
    ToastModule,
    DividerModule,
    ImageModule,
  ],
  templateUrl: './anniversary.component.html',
  styleUrls: ['./anniversary.component.css'],
  providers: [MessageService],
})
export class AnniversaryComponent implements OnInit {

  duration = { years: 0, months: 0, days: 0 };
  totalDaysTogether = 0;
  progressToNextAnniversary = 0;

  photos = [{ source: 'assets/anni1.jpg', alt: 'Our Happy Memory' },{ source: 'assets/b2.jpg', alt: 'Our Happy Memory' },{ source: 'assets/b1.jpg', alt: 'Our Happy Memory' }];

  timelineEvents = [
    {
      label: 'The Day We Met',
      date: 'December 1, 2017',
      icon: 'pi pi-heart-fill',
      tag: 'Start',
    },
    {
      label: '9th Anniversary',
      date: 'December 1, 2026',
      icon: 'pi pi-star-fill',
      tag: 'Upcoming',
    },
  ];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.calculateDetailedDuration();
  }

  calculateDetailedDuration() {
    const start = new Date('2017-12-01');
    const today = new Date(); 

    let years = today.getFullYear() - start.getFullYear();
    let months = today.getMonth() - start.getMonth();
    let days = today.getDate() - start.getDate();

    if (days < 0) {
      months -= 1;
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    this.duration = { years, months, days };

    // Total Days Calculation
    const diffTime = Math.abs(today.getTime() - start.getTime());
    this.totalDaysTogether = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const nextAnniversary = new Date(today.getFullYear(), 11, 1);
    if (today > nextAnniversary) {
      nextAnniversary.setFullYear(today.getFullYear() + 1);
    }
    const totalYearMs = 365 * 24 * 60 * 60 * 1000;
    const remainingMs = nextAnniversary.getTime() - today.getTime();
    this.progressToNextAnniversary = Math.round(
      100 - (remainingMs / totalYearMs) * 100
    );
  }

  showSecret() {
    this.messageService.add({
      severity: 'success',
      summary: '❤️ I Love You',
      detail: `Together for ${this.duration.years}y, ${this.duration.months}m, and ${this.duration.days}d. You are my everything!`,
      sticky: true,
    });
  }
}
