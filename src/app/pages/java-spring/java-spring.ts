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
    { topicName: 'Java Basics and Syntax', ytLink: 'https://youtu.be/wn49bJOYAZM?si=52ghBJgZvOftHhA9', isCompleted: false },
    { topicName: 'Data Types and Variables', ytLink: 'https://youtu.be/TAtrPoaJ7gc?si=yh5p2FLRr01kE0vg', isCompleted: false },
    { topicName: 'Control Flow ', ytLink: 'https://youtu.be/ldYLYRNaucM?si=jyQffT5UcacEw_rz', isCompleted: false },
   
    { topicName: 'Methods ', ytLink: 'https://youtu.be/vvanI8NRlSI?si=zotC1lBNl9wXu2a2', isCompleted: false },
    { topicName: 'Arrays and Strings', ytLink: 'https://youtu.be/n60Dn0UsbEk?si=VN_JyB1R2p_QbwRF', isCompleted: false },
    { topicName: 'Object-Oriented Programming (OOP), Classes and Objects', ytLink: 'https://youtu.be/BSVKUk58K6U?si=pUFry7-krM9T7omj', isCompleted: false },
    { topicName: 'Inheritance, Polymorphism, Abstraction,Encapsulation', ytLink: 'https://youtu.be/46T2wD3IuhM?si=9nSbIdpvRmAFkP7e', isCompleted: false },
    { topicName: 'Static and Final keywords', ytLink: 'https://youtu.be/_Ya6CN13t8k?si=oil1tAJn7-PcHOKg', isCompleted: false },
    { topicName: 'Exception Handling', ytLink: 'https://youtu.be/OY2lPr8h93U?si=sTJwDl7JNBWyZeeD', isCompleted: false },
    { topicName: 'Collections Framework', ytLink: 'https://youtu.be/9ogGan-R1pc?si=ZJBzFk1AQ6IJW0oD', isCompleted: false },
    { topicName: 'Multithreading and Concurrency', ytLink: 'https://youtu.be/4aYvLz4E1Ts?si=PItBNPFVnLDNn0TM', isCompleted: false },
    { topicName: 'File Handling', ytLink: 'https://youtu.be/b35mlSPOlJg?si=6AHBC_sIDc1p4HLM', isCompleted: false },
    { topicName: 'Java 8 Features', ytLink: 'https://youtu.be/mafkhtals0o?si=hUkwPboF_fCkgyJb', isCompleted: false },
    // Spring Framework Topics
    { topicName: 'Introduction to Spring Framework', ytLink: 'https://youtu.be/DQI66PNtyk8?si=jG734YhhMzjAcFx6', isCompleted: false },
    { topicName: 'Inversion of Control (IoC) and Dependency Injection (DI)', ytLink: 'https://youtu.be/1jGGsuQoLjY?si=UKZxoVbKYbOwBz5p', isCompleted: false },
    { topicName: 'Spring Beans and Bean Scopes', ytLink: 'https://youtu.be/bICqNfzUG4c?si=4F32N4Cq_wL8AwNW', isCompleted: false },
    { topicName: 'Spring Bean Lifecycle', ytLink: 'https://youtu.be/jChQnUMsW7k?si=Zm5Q2AmSb3mOMVuW', isCompleted: false },
    { topicName: 'Autowiring', ytLink: 'https://youtu.be/OifXqzHDBrE?si=Ao2qKnnTHyQfbbsE', isCompleted: false },
    { topicName: 'XML-based Configuration', ytLink: 'https://youtu.be/C2p1ngCq5KY?si=QY7rMGDRzaXtZsjO', isCompleted: false },
    { topicName: 'Annotation-based Configuration', ytLink: 'https://youtu.be/4gng9A7fXa8?si=O0gIxAXEqFUyJR3B', isCompleted: false },
    { topicName: 'Spring Configuration Java based', ytLink: 'https://youtu.be/xYgQfey1p0Y?si=0JjrTVu9a_MHxLYn', isCompleted: false },
    { topicName: 'Spring Expression Language (SpEL)', ytLink: 'https://youtu.be/BngfkO_OtSI?si=XPmTE_dIWZ7sL4z1', isCompleted: false },
    { topicName: 'Spring AOP (Aspect Oriented Programming)', ytLink: 'https://youtu.be/ajXMWivZuiU?si=x5_BD8pjq_jX-3kK', isCompleted: false },
    { topicName: 'Spring JDBC', ytLink: 'https://youtu.be/EErRkfwSF8U?si=sepjw8Ql8D1hWv_a', isCompleted: false },
    { topicName: 'Spring ORM (Integration with Hibernate)', ytLink: 'https://youtube.com/playlist?list=PLdQYFHQByRceJDsxikYLRXCPjbTuL9I0H&si=UfVZ-hKYyhTTIBpB', isCompleted: false },
    { topicName: 'Spring Transaction Management', ytLink: 'https://youtu.be/REXALUYxDIs?si=IBh10_iT3j1pTCE0', isCompleted: false },

    // Spring Boot Topics
    { topicName: 'Introduction to Spring Boot', ytLink: 'https://youtu.be/729Pd-ZQ4uA?si=PbTdZ11LDAjPgr3d', isCompleted: false },
    { topicName: 'Spring Boot Project Structure', ytLink: 'https://youtu.be/rVOmSrCSdGE?si=xgVLXHsnIRVl8_3h', isCompleted: false },
    { topicName: 'Spring Boot Starter Dependencies', ytLink: 'https://youtu.be/GT3Doklq0RY?si=we0dtj6YqmT5y-ZE', isCompleted: false },
    { topicName: 'Spring Boot Auto-Configuration', ytLink: 'https://youtu.be/rVOmSrCSdGE?si=xgVLXHsnIRVl8_3h', isCompleted: false },
    { topicName: 'Spring Boot Annotations', ytLink: 'https://youtu.be/H08bv6z_Tjw?si=dnafMcsAQhInltSN', isCompleted: false },
    { topicName: 'Creating RESTful APIs', ytLink: 'https://youtu.be/JnKOmazIGy0?si=v5-9QZwftSEgiFeA', isCompleted: false },
    { topicName: 'Connecting to Databases (JPA + Hibernate + MySQL)', ytLink: 'https://youtu.be/1uVACJuZ7CA?si=8KYwjeCIj7BcacCd', isCompleted: false },
    { topicName: 'Spring Data JPA', ytLink: 'https://youtu.be/agTUJ4aVJSQ?si=4Xfe1QvX93XfUrpZ', isCompleted: false },
    { topicName: 'CRUD Operations with Spring Boot', ytLink: 'https://youtu.be/uQWYAA7hpVU?si=P9aK7LEa6iS2jm6d', isCompleted: false },
    { topicName: 'Exception Handling in REST APIs', ytLink: '', isCompleted: false },
    { topicName: 'Spring Boot DevTools', ytLink: 'https://youtu.be/1xZfemw_9hk?si=f1qjQfZCxJUUcnVM', isCompleted: false },
    { topicName: 'Configuration using application.properties / application.yml', ytLink: 'https://youtu.be/rGmIJ_o90oQ?si=GEBGDfITsAJ4aFEh', isCompleted: false },
    { topicName: 'Spring Boot Security', ytLink: 'https://youtu.be/nWbG6r7kSJ0?si=qHUtuEbuR_ZSoaof', isCompleted: false },
    { topicName: 'Basic Auth / JWT', ytLink: 'https://youtu.be/U5wQn5SVC08?si=yvOEal6OEW39PZCt', isCompleted: false },
    { topicName: 'Unit Tests and Integration Tests', ytLink: 'https://youtu.be/qpK1AoFWY8k?si=JpZl3oCmBV2OoKbL', isCompleted: false },
    { topicName: 'Deploying Spring Boot Applications (WAR, JAR, Docker, Cloud)', ytLink: 'https://youtu.be/MU2e6-CC3Pc?si=fr6d_1T3_gRWHELw', isCompleted: false }
  ];

  toggleCompletion(topic: Topic) {
    topic.isCompleted = !topic.isCompleted;
  }
}