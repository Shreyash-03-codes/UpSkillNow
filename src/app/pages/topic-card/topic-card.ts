import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-topic-card',
  templateUrl: './topic-card.html',
  styleUrls: ['./topic-card.css'],
  imports:[FormsModule,CommonModule]
})
export class TopicCard {
  @Input() topicName!: string;
  @Input() ytLink!: string;
  @Input() isCompleted: boolean = false;

  showNotes: boolean = false;
  notes: string = '';

  toggleNotes() {
    this.showNotes = !this.showNotes;
  }

  openYouTube() {
    if (this.ytLink) {
      window.open(this.ytLink, '_blank');
    }
  }
}
