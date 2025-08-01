import { Component } from '@angular/core';
import { Topic } from '../../../Topic';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TopicCard } from "../topic-card/topic-card";

@Component({
  selector: 'app-devops',
  imports: [FormsModule, CommonModule, TopicCard],
  templateUrl: './devops.html',
  styleUrls: ['./devops.css']
})
export class Devops {
  topicsList: Topic[] = [
    // DevOps Fundamentals
    { topicName: 'Introduction to DevOps', ytLink: 'https://youtu.be/5VVSh1wKOX8?si=pdL42sYXelFIlwCz', isCompleted: false },
    { topicName: 'Linux', ytLink: 'https://youtu.be/CTZfWmMAdoI?si=e96r3QUtwFDVwTFJ', isCompleted: false },
    { topicName: 'CI/CD Concepts', ytLink: 'https://youtu.be/N-Iv4KIOvKY?si=59cFduslKLnU44pq', isCompleted: false },
    { topicName: 'Version Control with Git and GitHub', ytLink: 'https://youtu.be/ZoOdwgxmw4U?si=thdrqTHCgHUYp4Rr', isCompleted: false },

    // Continuous Integration & Build Tools
    { topicName: 'Build Tools Overview (Maven, Gradle)', ytLink: 'https://youtu.be/n1V8AtPPqZA?si=9pv4wDa3pmIXgnEA', isCompleted: false },
    { topicName: 'Continuous Integration with Jenkins', ytLink: 'https://youtu.be/y4RcDlfYKB8?si=4bVj6XDPNvqJCXmq', isCompleted: false },

    // Containerization with Docker
    { topicName: 'Docker Basics ', ytLink: 'https://youtu.be/exmSJpJvIPs?si=BV8JWGc9ITaAn61I', isCompleted: false },


    // Container Orchestration with Kubernetes
    { topicName: 'Introduction to Kubernetes', ytLink: 'https://youtu.be/KVBON1lA9N8?si=erB1x7B8BksL5D2L', isCompleted: false },


    // Infrastructure as Code (IaC)
    { topicName: 'What is Infrastructure as Code?', ytLink: 'https://youtu.be/G1BRnIHBBig?si=30TmHTYr0D4xvgGf', isCompleted: false },
    { topicName: 'Terraform Basics', ytLink: 'https://youtu.be/lo0M1FCgC-I?si=xvhRk_Yg5z7_vyG2', isCompleted: false },


    // Monitoring and Logging
    { topicName: 'Monitoring Concepts and Tools Overview', ytLink: 'https://youtu.be/DXZUunEeHqM?si=ScgxliXAIOswmi1h', isCompleted: false },


    // Cloud and Deployment
    { topicName: 'Introduction to Cloud Providers (AWS, Azure, GCP)', ytLink: 'https://youtu.be/DxveVHN4Ymg?si=n7sCcwUPXxhNQ-Gz', isCompleted: false },
    { topicName: 'EC2, S3, IAM Basics in AWS', ytLink: 'https://youtu.be/gO_2VWUkl0U?si=CReT0TCtxBLMrVpf', isCompleted: false },

  ];

  toggleCompletion(topic: Topic) {
    topic.isCompleted = !topic.isCompleted;
  }
}