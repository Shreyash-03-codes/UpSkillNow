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
    { topicName: 'HTML Syntax and Structure', ytLink: '', isCompleted: false },
    { topicName: 'HTML Forms and Inputs', ytLink: '', isCompleted: false },
    { topicName: 'Semantic HTML', ytLink: '', isCompleted: false },
    { topicName: 'CSS Syntax and Selectors', ytLink: '', isCompleted: false },
    { topicName: 'Box Model and Positioning', ytLink: '', isCompleted: false },
    { topicName: 'Flexbox and Grid', ytLink: '', isCompleted: false },
    { topicName: 'Responsive Design & Media Queries', ytLink: '', isCompleted: false },
    { topicName: 'CSS Animations and Transitions', ytLink: '', isCompleted: false },
    { topicName: 'Bootstrap / Tailwind Basics', ytLink: '', isCompleted: false },

    // JavaScript Fundamentals
    { topicName: 'JavaScript Basics (var, let, const)', ytLink: '', isCompleted: false },
    { topicName: 'Data Types and Operators', ytLink: '', isCompleted: false },
    { topicName: 'Functions and Scope', ytLink: '', isCompleted: false },
    { topicName: 'DOM Manipulation', ytLink: '', isCompleted: false },
    { topicName: 'Event Handling', ytLink: '', isCompleted: false },
    { topicName: 'ES6 Features (Arrow Functions, Destructuring)', ytLink: '', isCompleted: false },
    { topicName: 'Promises and Async/Await', ytLink: '', isCompleted: false },
    { topicName: 'LocalStorage and SessionStorage', ytLink: '', isCompleted: false },

    // Frontend Frameworks
    { topicName: 'Introduction to React', ytLink: '', isCompleted: false },
    { topicName: 'JSX and Components', ytLink: '', isCompleted: false },
    { topicName: 'State and Props', ytLink: '', isCompleted: false },
    { topicName: 'React Hooks (useState, useEffect)', ytLink: '', isCompleted: false },
    { topicName: 'React Router', ytLink: '', isCompleted: false },
    { topicName: 'Angular Basics', ytLink: '', isCompleted: false },
    { topicName: 'Vue.js Basics', ytLink: '', isCompleted: false },

    // Backend Development
    { topicName: 'HTTP and REST APIs', ytLink: '', isCompleted: false },
    { topicName: 'Node.js Basics', ytLink: '', isCompleted: false },
    { topicName: 'Express.js Framework', ytLink: '', isCompleted: false },
    { topicName: 'CRUD APIs in Express', ytLink: '', isCompleted: false },
    { topicName: 'Authentication (JWT)', ytLink: '', isCompleted: false },
    { topicName: 'File Upload and Middleware', ytLink: '', isCompleted: false },

    // Database
    { topicName: 'Introduction to Databases', ytLink: '', isCompleted: false },
    { topicName: 'MySQL / PostgreSQL Basics', ytLink: '', isCompleted: false },
    { topicName: 'MongoDB Basics', ytLink: '', isCompleted: false },
    { topicName: 'ORMs (Mongoose / Sequelize)', ytLink: '', isCompleted: false },

    // Full Stack & DevOps Basics
    { topicName: 'Connecting Frontend to Backend', ytLink: '', isCompleted: false },
    { topicName: 'CORS and Proxy', ytLink: '', isCompleted: false },
    { topicName: 'Environment Variables', ytLink: '', isCompleted: false },
    { topicName: 'Build Tools (Webpack, Vite)', ytLink: '', isCompleted: false },
    { topicName: 'Hosting on Netlify / Vercel / Render', ytLink: '', isCompleted: false },
    { topicName: 'Docker Basics for Web Apps', ytLink: '', isCompleted: false },
    { topicName: 'CI/CD Pipeline Overview', ytLink: '', isCompleted: false }
  ];

  toggleCompletion(topic: Topic) {
    topic.isCompleted = !topic.isCompleted;
  }
}