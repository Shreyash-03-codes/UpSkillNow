import { Component } from '@angular/core';
import { Topic } from '../../../Topic';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TopicCard } from '../topic-card/topic-card';

@Component({
  selector: 'app-web-development',
  imports: [FormsModule,CommonModule,TopicCard],
  templateUrl: './web-development.html',
  styleUrl: './web-development.css'
})
export class WebDevelopment {


  topicsList: Topic[] = [
    // HTML & CSS Basics
    { topicName: 'HTML one Shot', ytLink: 'https://youtu.be/k7ELO356Npo?si=34HbY4BUnZmkVWJ1', isCompleted: false },
    { topicName: 'CSS one Shot', ytLink: 'https://youtu.be/dSJM4Gyh8jE?si=elVWUfbP0x5ZXen8', isCompleted: false },
    { topicName: 'Bootstrap one Shot', ytLink: 'https://youtu.be/fB00t4At0rk?si=KXbtElh9tGXG7R3u', isCompleted: false },
    { topicName: 'Tailwind CSS one Shot', ytLink: 'https://youtu.be/Sae1MD5E5p8?si=g-MLq-RnD6yKszO8', isCompleted: false },


    // JavaScript Fundamentals
    { topicName: 'JavaScript One Shot', ytLink: 'https://youtu.be/rfObCuGLSek?si=qop8JRiYfYWfykaa', isCompleted: false },
    { topicName: 'ReactJs One Shot', ytLink: 'https://youtu.be/eILUmCJhl64?si=s-xiAP4VJUJhM8aM', isCompleted: false },
    { topicName: 'Angular One Shot', ytLink: 'https://youtu.be/jYV2enNmplM?si=3av8e-EC_sqgIhnr', isCompleted: false },


    // Backend Development
  
    { topicName: 'Node.js & ExpressJs One Shot', ytLink: 'https://youtu.be/Oe421EPjeBE?si=xM4SNl27XSLzgpGW', isCompleted: false },


    // Database
    { topicName: 'MySQL / PostgreSQL Basics', ytLink: 'https://youtu.be/hlGoQC332VM?si=3-tljlqwLufdFVTb', isCompleted: false },
    { topicName: 'MongoDB ', ytLink: 'https://youtu.be/J6mDkcqU_ZE?si=GHLL9Ve667Z3OBDH', isCompleted: false },
    { topicName: 'ORMs (Mongoose)', ytLink: 'https://youtu.be/xdbm7n9dWHM?si=4p0QWsVny9fa4ogK', isCompleted: false },


    { topicName: 'Build Tools (Vite)', ytLink: 'https://youtu.be/do62-z3z6FM?si=MM5vOZ1900elOumu', isCompleted: false },
    { topicName: 'Hosting on Vercel', ytLink: 'https://youtu.be/VigFI4TuwzI?si=JTkwbNNb2ezH6sGm', isCompleted: false },
    { topicName: 'Docker Basics for Web Apps', ytLink: 'https://youtu.be/17Bl31rlnRM?si=xdGFrX5u87SMXJY3', isCompleted: false },
    { topicName: 'CI/CD Pipeline Overview', ytLink: 'https://youtu.be/y4RcDlfYKB8?si=KcnIWycisogvstdj', isCompleted: false }
  ];

  toggleCompletion(topic: Topic) {
    topic.isCompleted = !topic.isCompleted;
  }
}