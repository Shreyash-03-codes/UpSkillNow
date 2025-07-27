import { Component } from '@angular/core';
import { Topic } from '../../../Topic';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TopicCard } from "../topic-card/topic-card";

@Component({
  selector: 'app-system-design',
  imports: [FormsModule, CommonModule, TopicCard],
  templateUrl: './system-design.html',
  styleUrls: ['./system-design.css']
})
export class SystemDesign {
  topicsList: Topic[] = [
    // High-Level Design (HLD) Topics
    { topicName: 'What is System Design?', ytLink: '', isCompleted: false },
    { topicName: 'Scalability and Performance Basics', ytLink: '', isCompleted: false },
    { topicName: 'Load Balancing', ytLink: '', isCompleted: false },
    { topicName: 'Caching Strategies', ytLink: '', isCompleted: false },
    { topicName: 'Database Design (RDBMS vs NoSQL)', ytLink: '', isCompleted: false },
    { topicName: 'Database Sharding and Replication', ytLink: '', isCompleted: false },
    { topicName: 'CAP Theorem and Consistency Models', ytLink: '', isCompleted: false },
    { topicName: 'Message Queues and Event-Driven Architecture', ytLink: '', isCompleted: false },
    { topicName: 'Content Delivery Network (CDN)', ytLink: '', isCompleted: false },
    { topicName: 'API Gateway and Microservices Architecture', ytLink: '', isCompleted: false },
    { topicName: 'Rate Limiting and Throttling', ytLink: '', isCompleted: false },
    { topicName: 'Designing for High Availability & Fault Tolerance', ytLink: '', isCompleted: false },
    { topicName: 'Designing Distributed Systems', ytLink: '', isCompleted: false },
    { topicName: 'System Design Case Study: URL Shortener', ytLink: '', isCompleted: false },
    { topicName: 'System Design Case Study: Instagram or Facebook Feed', ytLink: '', isCompleted: false },
    { topicName: 'System Design Case Study: Chat System like WhatsApp', ytLink: '', isCompleted: false },
    { topicName: 'System Design Case Study: Netflix Video Streaming', ytLink: '', isCompleted: false },
    { topicName: 'System Design Case Study: Google Docs (Real-time Collaboration)', ytLink: '', isCompleted: false },

    // Low-Level Design (LLD) Topics
    { topicName: 'What is Low-Level Design?', ytLink: '', isCompleted: false },
    { topicName: 'Design Principles: SOLID, DRY, KISS, YAGNI', ytLink: '', isCompleted: false },
    { topicName: 'UML Diagrams: Class, Sequence, Use Case', ytLink: '', isCompleted: false },
    { topicName: 'Object-Oriented Design Patterns', ytLink: '', isCompleted: false },
    { topicName: 'Factory Design Pattern', ytLink: '', isCompleted: false },
    { topicName: 'Singleton Design Pattern', ytLink: '', isCompleted: false },
    { topicName: 'Observer and Strategy Patterns', ytLink: '', isCompleted: false },
    { topicName: 'Builder and Adapter Patterns', ytLink: '', isCompleted: false },
    { topicName: 'Low-Level Design Case Study: Parking Lot System', ytLink: '', isCompleted: false },
    { topicName: 'Low-Level Design Case Study: Library Management System', ytLink: '', isCompleted: false },
    { topicName: 'Low-Level Design Case Study: Food Delivery App', ytLink: '', isCompleted: false },
    { topicName: 'Low-Level Design Case Study: Ride Sharing App (e.g., Uber)', ytLink: '', isCompleted: false }
  ];

  toggleCompletion(topic: Topic) {
    topic.isCompleted = !topic.isCompleted;
  }
}