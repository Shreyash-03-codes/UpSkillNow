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
    { topicName: 'Introduction to DevOps', ytLink: '', isCompleted: false },
    { topicName: 'DevOps Lifecycle and Principles', ytLink: '', isCompleted: false },
    { topicName: 'Agile and Scrum Overview', ytLink: '', isCompleted: false },
    { topicName: 'CI/CD Concepts', ytLink: '', isCompleted: false },
    { topicName: 'Version Control with Git and GitHub', ytLink: '', isCompleted: false },

    // Continuous Integration & Build Tools
    { topicName: 'Build Tools Overview (Maven, Gradle)', ytLink: '', isCompleted: false },
    { topicName: 'Continuous Integration with Jenkins', ytLink: '', isCompleted: false },
    { topicName: 'Pipeline as Code (Jenkinsfile)', ytLink: '', isCompleted: false },
    { topicName: 'Webhooks and Automated Builds', ytLink: '', isCompleted: false },

    // Containerization with Docker
    { topicName: 'Docker Basics and Installation', ytLink: '', isCompleted: false },
    { topicName: 'Dockerfile and Image Creation', ytLink: '', isCompleted: false },
    { topicName: 'Docker Compose', ytLink: '', isCompleted: false },
    { topicName: 'Docker Networking and Volumes', ytLink: '', isCompleted: false },

    // Container Orchestration with Kubernetes
    { topicName: 'Introduction to Kubernetes', ytLink: '', isCompleted: false },
    { topicName: 'Kubernetes Architecture', ytLink: '', isCompleted: false },
    { topicName: 'Deployments, Pods, and Services', ytLink: '', isCompleted: false },
    { topicName: 'ConfigMaps and Secrets', ytLink: '', isCompleted: false },
    { topicName: 'Helm Basics and Charts', ytLink: '', isCompleted: false },

    // Infrastructure as Code (IaC)
    { topicName: 'What is Infrastructure as Code?', ytLink: '', isCompleted: false },
    { topicName: 'Terraform Basics', ytLink: '', isCompleted: false },
    { topicName: 'Provisioning Resources using Terraform', ytLink: '', isCompleted: false },
    { topicName: 'Terraform State Management', ytLink: '', isCompleted: false },

    // Monitoring and Logging
    { topicName: 'Monitoring Concepts and Tools Overview', ytLink: '', isCompleted: false },
    { topicName: 'Prometheus and Grafana Basics', ytLink: '', isCompleted: false },
    { topicName: 'Centralized Logging with ELK Stack', ytLink: '', isCompleted: false },

    // Cloud and Deployment
    { topicName: 'Introduction to Cloud Providers (AWS, Azure, GCP)', ytLink: '', isCompleted: false },
    { topicName: 'EC2, S3, IAM Basics in AWS', ytLink: '', isCompleted: false },
    { topicName: 'Deploying Applications on AWS', ytLink: '', isCompleted: false },
    { topicName: 'CI/CD with GitHub Actions', ytLink: '', isCompleted: false },
    { topicName: 'Docker + Jenkins + Kubernetes Integration', ytLink: '', isCompleted: false },

    // Security and Best Practices
    { topicName: 'DevSecOps Overview', ytLink: '', isCompleted: false },
    { topicName: 'Secrets Management (Vault, AWS Secrets Manager)', ytLink: '', isCompleted: false },
    { topicName: 'Best Practices in DevOps Pipeline', ytLink: '', isCompleted: false }
  ];

  toggleCompletion(topic: Topic) {
    topic.isCompleted = !topic.isCompleted;
  }
}