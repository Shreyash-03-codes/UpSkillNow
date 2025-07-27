import { Component } from '@angular/core';
import { TopicCard } from '../topic-card/topic-card';
import { Topic } from '../../../Topic';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-java-spring',
  imports: [TopicCard, FormsModule, CommonModule],
  templateUrl: './java-spring.html',
  styleUrls: ['./java-spring.css']
})
export class JavaSpring {
  topicsList: Topic[] = [
    // Core Java Topics
    { topicName: 'Java Basics and Syntax', ytLink: '', isCompleted: false },
    { topicName: 'Data Types and Variables', ytLink: '', isCompleted: false },
    { topicName: 'Operators and Expressions', ytLink: '', isCompleted: false },
    { topicName: 'Control Flow (if, switch, loops)', ytLink: '', isCompleted: false },
    { topicName: 'Methods and Recursion', ytLink: '', isCompleted: false },
    { topicName: 'Arrays and Strings', ytLink: '', isCompleted: false },
    { topicName: 'Object-Oriented Programming (OOP)', ytLink: '', isCompleted: false },
    { topicName: 'Classes and Objects', ytLink: '', isCompleted: false },
    { topicName: 'Inheritance', ytLink: '', isCompleted: false },
    { topicName: 'Polymorphism', ytLink: '', isCompleted: false },
    { topicName: 'Abstraction', ytLink: '', isCompleted: false },
    { topicName: 'Encapsulation', ytLink: '', isCompleted: false },
    { topicName: 'Constructors and Overloading', ytLink: '', isCompleted: false },
    { topicName: 'Static and Final keywords', ytLink: '', isCompleted: false },
    { topicName: 'Exception Handling', ytLink: '', isCompleted: false },
    { topicName: 'Wrapper Classes and Autoboxing', ytLink: '', isCompleted: false },
    { topicName: 'Collections Framework', ytLink: '', isCompleted: false },
    { topicName: 'List, Set, Map', ytLink: '', isCompleted: false },
    { topicName: 'ArrayList, LinkedList', ytLink: '', isCompleted: false },
    { topicName: 'HashMap, HashSet', ytLink: '', isCompleted: false },
    { topicName: 'Generics', ytLink: '', isCompleted: false },
    { topicName: 'Multithreading and Concurrency', ytLink: '', isCompleted: false },
    { topicName: 'File Handling', ytLink: '', isCompleted: false },
    { topicName: 'Serialization and Deserialization', ytLink: '', isCompleted: false },
    { topicName: 'Enum and Annotations', ytLink: '', isCompleted: false },
    { topicName: 'Java 8 Features', ytLink: '', isCompleted: false },
    { topicName: 'Lambda Expressions', ytLink: '', isCompleted: false },
    { topicName: 'Streams API', ytLink: '', isCompleted: false },
    { topicName: 'Functional Interfaces', ytLink: '', isCompleted: false },

    // Spring Framework Topics
    { topicName: 'Introduction to Spring Framework', ytLink: '', isCompleted: false },
    { topicName: 'Inversion of Control (IoC) and Dependency Injection (DI)', ytLink: '', isCompleted: false },
    { topicName: 'Spring Beans and Bean Scopes', ytLink: '', isCompleted: false },
    { topicName: 'Spring Bean Lifecycle', ytLink: '', isCompleted: false },
    { topicName: 'Autowiring', ytLink: '', isCompleted: false },
    { topicName: 'Spring Configuration', ytLink: '', isCompleted: false },
    { topicName: 'XML-based Configuration', ytLink: '', isCompleted: false },
    { topicName: 'Annotation-based Configuration', ytLink: '', isCompleted: false },
    { topicName: 'Java-based Configuration', ytLink: '', isCompleted: false },
    { topicName: 'Spring Core Annotations (@Component, @Autowired, etc.)', ytLink: '', isCompleted: false },
    { topicName: 'Spring Expression Language (SpEL)', ytLink: '', isCompleted: false },
    { topicName: 'Spring AOP (Aspect Oriented Programming)', ytLink: '', isCompleted: false },
    { topicName: 'Spring JDBC', ytLink: '', isCompleted: false },
    { topicName: 'Spring ORM (Integration with Hibernate)', ytLink: '', isCompleted: false },
    { topicName: 'Spring Transaction Management', ytLink: '', isCompleted: false },
    { topicName: 'Spring Event Handling', ytLink: '', isCompleted: false },

    // Spring Boot Topics
    { topicName: 'Introduction to Spring Boot', ytLink: '', isCompleted: false },
    { topicName: 'Spring Boot Project Structure', ytLink: '', isCompleted: false },
    { topicName: 'Spring Boot Starter Dependencies', ytLink: '', isCompleted: false },
    { topicName: 'Spring Boot Auto-Configuration', ytLink: '', isCompleted: false },
    { topicName: 'Spring Boot Annotations', ytLink: '', isCompleted: false },
    { topicName: '@SpringBootApplication, @RestController, etc.', ytLink: '', isCompleted: false },
    { topicName: 'Creating RESTful APIs', ytLink: '', isCompleted: false },
    { topicName: 'Connecting to Databases (JPA + Hibernate + MySQL)', ytLink: '', isCompleted: false },
    { topicName: 'Spring Data JPA', ytLink: '', isCompleted: false },
    { topicName: 'CRUD Operations with Spring Boot', ytLink: '', isCompleted: false },
    { topicName: 'Exception Handling in REST APIs', ytLink: '', isCompleted: false },
    { topicName: 'Spring Boot DevTools', ytLink: '', isCompleted: false },
    { topicName: 'Spring Boot Profiles', ytLink: '', isCompleted: false },
    { topicName: 'Configuration using application.properties / application.yml', ytLink: '', isCompleted: false },
    { topicName: 'Spring Boot Validation (@Valid, @NotNull, etc.)', ytLink: '', isCompleted: false },
    { topicName: 'Spring Boot Security', ytLink: '', isCompleted: false },
    { topicName: 'Basic Auth / JWT', ytLink: '', isCompleted: false },
    { topicName: 'Testing in Spring Boot', ytLink: '', isCompleted: false },
    { topicName: 'Unit Tests and Integration Tests', ytLink: '', isCompleted: false },
    { topicName: 'Deploying Spring Boot Applications (WAR, JAR, Docker, Cloud)', ytLink: '', isCompleted: false }
  ];

  toggleCompletion(topic: Topic) {
    topic.isCompleted = !topic.isCompleted;
  }
}