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
    { topicName: 'What is System Design?', ytLink: 'https://youtu.be/SqcXvc3ZmRU?si=4yc07fcFvtHltIIQ', isCompleted: false },
    { topicName: 'Scalability and Performance Basics', ytLink: 'https://youtu.be/xpDnVSmNFX0?si=vTROotHEzslI_1f9', isCompleted: false },
    { topicName: 'Load Balancing', ytLink: 'https://youtu.be/K0Ta65OqQkY?si=FA5hcC1hGbheUftC', isCompleted: false },
    { topicName: 'Caching Strategies', ytLink: 'https://youtu.be/zw7VwIlkPPc?si=Thwl_KemrXRTHOqM', isCompleted: false },
    { topicName: 'Database Design (RDBMS vs NoSQL)', ytLink: 'https://youtu.be/fG8c-huFt70?si=0Mj1Js1xGXCbb2Ie', isCompleted: false },
    { topicName: 'Database Sharding and Replication', ytLink: 'https://youtu.be/5faMjKuB9bc?si=sJTF-RYmYWCL6WZp', isCompleted: false },
    { topicName: 'CAP Theorem and Consistency Models', ytLink: 'https://youtu.be/rb2R5I9S5d8?si=VUTdAcTjPvzoTWpj', isCompleted: false },
    { topicName: 'Message Queues and CDN)', ytLink: 'https://youtu.be/G2xEnPugNoo?si=eV4igN_0r4pItBRh', isCompleted: false },
    { topicName: 'API Gateway and Microservices Architecture', ytLink: 'https://youtu.be/RbMxB_Cyx6A?si=4kJw4EWhxMN3DWiY', isCompleted: false },
    { topicName: 'Rate Limiting and Throttling', ytLink: 'https://youtu.be/X5daFTDfy2g?si=koMRtYGvLAyZ5ZRf', isCompleted: false },
    { topicName: 'Designing Distributed Systems', ytLink: 'https://youtu.be/m4q7VkgDWrM?si=rx2btSYtSjHg_bqZ', isCompleted: false },
    { topicName: 'System Design Case Study: URL Shortener', ytLink: 'https://youtu.be/9csfoQK2T8g?si=aWa23yKyMTI6WmfB', isCompleted: false },
    { topicName: 'System Design Case Study: Instagram or Facebook Feed', ytLink: 'https://youtu.be/QmX2NPkJTKg?si=FV-RFqNNTHImjk83', isCompleted: false },
    { topicName: 'System Design Case Study: Chat System like WhatsApp', ytLink: 'https://youtu.be/vvhC64hQZMk?si=Q5e8plx3eOdNAQRV', isCompleted: false },
    { topicName: 'System Design Case Study: Netflix Video Streaming', ytLink: 'https://youtu.be/yKgWAHqmAwk?si=zUG-NDNX5nKC4DAd', isCompleted: false },
    { topicName: 'System Design Case Study: Google Docs (Real-time Collaboration)', ytLink: 'https://youtu.be/YCjVIDv0zQY?si=rF0Q3ZEstCRMZGEw', isCompleted: false },

    // Low-Level Design (LLD) Topics
    { topicName: 'What is Low-Level Design?', ytLink: 'https://youtu.be/AK0hu0Zxua4?si=jCGQP-Ar_5Ck-ipP', isCompleted: false },
    { topicName: 'Design Principles: SOLID, DRY, KISS, YAGNI', ytLink: 'https://youtu.be/4oQ0xeMgyMs?si=aBZaWWZTo_4T1zXH', isCompleted: false },
    { topicName: 'UML Diagrams: Class, Sequence, Use Case', ytLink: 'https://youtu.be/nPJyyO9pb5s?si=jWfJHvF9j7B5SWFK', isCompleted: false },
    { topicName: 'Object-Oriented Design Patterns', ytLink: 'https://youtu.be/QbGoqAgP_zg?si=QK0aA_QVhs9WAWht', isCompleted: false },
    { topicName: 'Factory Design Pattern', ytLink: 'https://youtu.be/dMK4TbG29fk?si=sfWByT0LK7AwfccR', isCompleted: false },
    { topicName: 'Singleton Design Pattern', ytLink: 'https://youtu.be/CD3meit-WDc?si=80aTZqIrerqj-v2p', isCompleted: false },
    { topicName: 'Observer and Strategy Patterns', ytLink: 'https://youtu.be/Jpmp4GY8r3Q?si=CtlH0pUFBErMdc4r', isCompleted: false },
    { topicName: 'Builder and Adapter Patterns', ytLink: 'https://youtu.be/G4Ntl9KzIxY?si=ZVFxQ-BXtsrPh8sZ', isCompleted: false },
    { topicName: 'Low-Level Design Case Study: Parking Lot System', ytLink: 'https://youtu.be/RkmO5GRedLo?si=Fus7gO9H15hVmmb3', isCompleted: false },
    { topicName: 'Low-Level Design Case Study: Library Management System', ytLink: 'https://youtu.be/fVqv4B8sG1s?si=l45t9H3_NfSu1Nok', isCompleted: false },
    { topicName: 'Low-Level Design Case Study: Food Delivery App', ytLink: 'https://youtu.be/nHh3DnjnPig?si=OcYeegnchV_BxgnQ', isCompleted: false },
    { topicName: 'Low-Level Design Case Study: Ride Sharing App (e.g., Uber)', ytLink: 'https://youtu.be/DGtalg5efCw?si=LOpplT4xuXaIGiGI', isCompleted: false }
  ];

  toggleCompletion(topic: Topic) {
    topic.isCompleted = !topic.isCompleted;
  }
}