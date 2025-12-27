import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CarouselModule,
    ButtonModule,
    CardModule,
    ConfirmDialogModule,
    ToastModule,
    InputTextModule,
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
  providers: [ConfirmationService, MessageService],
})
export class ContentComponent {
  loveAnswer: string = '';
  showSecretMessage: boolean = false;
  secretMessage: string = '';
  isHappyEnding: boolean = false;

  showSecret: boolean = false;
  secretMsg: string = '';
  isHappy: boolean = false;
  image = [
    { id: 1, image: 'assets/b8.jpg', name: 'Smart girl' },
    { id: 2, image: 'assets/b6.jpg', name: 'Cute girl' },
    { id: 3, image: 'assets/b7.jpg', name: 'Pretty girl' },
    { id: 4, image: 'assets/b4.jpg', name: 'Sexy girl' },
  ];

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  // Add these variables inside the class

  // Add this function
  checkLove() {
    const ans = this.loveAnswer.toLowerCase().trim();
    this.showSecret = true;

    if (ans === 'yes' || ans.includes('do') || ans.includes('love')) {
      this.isHappy = true;
      this.secretMsg =
        'My heart is so happy! I love you more than words can say. ❤️';
    } else {
      this.isHappy = false;
      this.secretMsg = 'I will keep trying until I win your heart back. ✨';
    }
  }

  confirmForgiveness() {
    this.confirmationService.confirm({
      header: 'A Heartfelt Question',
      message:
        'I know I made a mistake. Will you forgive me and let us start fresh?',
      accept: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Thank you ❤️',
          detail: 'I will cherish you forever.',
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'warn',
          summary: 'I Understand',
          detail: 'I will keep trying to prove my love.',
        });
      },
    });
  }

  checkLoveStatus() {
    const answer = this.loveAnswer.toLowerCase().trim();
    if (
      answer.includes('yes') ||
      answer.includes('do') ||
      answer.includes('love')
    ) {
      this.secretMessage = 'My heart just skipped a beat! Look below... ❤️';
      this.showSecretMessage = true;
      this.isHappyEnding = true;
    } else {
      this.secretMessage = "I'll keep waiting until your answer changes. ✨";
      this.showSecretMessage = true;
      this.isHappyEnding = false;
    }
  }
}
