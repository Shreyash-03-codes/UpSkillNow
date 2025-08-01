import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-topic-card',
  standalone: true, // Add standalone if using Angular 14+
  templateUrl: './topic-card.html',
  styleUrls: ['./topic-card.css'],
  imports: [FormsModule, CommonModule]
})
export class TopicCard {
  @Input() topicName: string = ''; // Changed from ! to default value
  @Input() ytLink: string = ''; // Added ytLink with default value
  @Input() isCompleted: boolean = false;

  showNotes: boolean = false;
  notes: string = '';

  toggleNotes(): void {
    this.showNotes = !this.showNotes;
  }

  openYouTube(): void {
    if (this.ytLink) {
      try {
        // Basic URL validation
        new URL(this.ytLink);
        window.open(this.ytLink, '_blank');
      } catch (e) {
        console.error('Invalid YouTube URL:', this.ytLink);
      }
    }
  }
}