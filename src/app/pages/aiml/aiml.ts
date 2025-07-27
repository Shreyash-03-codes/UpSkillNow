import { Component } from '@angular/core';
import { TopicCard } from '../topic-card/topic-card';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Topic {
  topicName: string;
  ytLink: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-aiml',
  templateUrl: './aiml.html',
  styleUrls: ['./aiml.css'],
  imports:[TopicCard,FormsModule,CommonModule]
})
export class Aiml {
  topicsList: Topic[] = [
    // AI/ML Fundamentals
    { topicName: 'Introduction to Artificial Intelligence', ytLink: '', isCompleted: false },
    { topicName: 'Introduction to Machine Learning', ytLink: '', isCompleted: false },
    { topicName: 'Types of Machine Learning (Supervised, Unsupervised, Reinforcement)', ytLink: '', isCompleted: false },
    { topicName: 'Machine Learning Life Cycle', ytLink: '', isCompleted: false },
    { topicName: 'Basic Terminologies in ML', ytLink: '', isCompleted: false },

    // Mathematics for ML
    { topicName: 'Linear Algebra Basics', ytLink: '', isCompleted: false },
    { topicName: 'Probability & Statistics', ytLink: '', isCompleted: false },
    { topicName: 'Calculus for ML (Derivatives, Gradients)', ytLink: '', isCompleted: false },
    { topicName: 'Optimization Techniques (Gradient Descent)', ytLink: '', isCompleted: false },

    // Data Handling
    { topicName: 'Data Preprocessing', ytLink: '', isCompleted: false },
    { topicName: 'Feature Engineering', ytLink: '', isCompleted: false },
    { topicName: 'Handling Missing Data & Outliers', ytLink: '', isCompleted: false },
    { topicName: 'Train-Test Split and Cross Validation', ytLink: '', isCompleted: false },

    // Core Machine Learning Algorithms
    { topicName: 'Linear Regression', ytLink: '', isCompleted: false },
    { topicName: 'Logistic Regression', ytLink: '', isCompleted: false },
    { topicName: 'Decision Trees & Random Forest', ytLink: '', isCompleted: false },
    { topicName: 'K-Nearest Neighbors (KNN)', ytLink: '', isCompleted: false },
    { topicName: 'Support Vector Machines (SVM)', ytLink: '', isCompleted: false },
    { topicName: 'Naive Bayes Classifier', ytLink: '', isCompleted: false },
    { topicName: 'Clustering (K-Means, DBSCAN)', ytLink: '', isCompleted: false },

    // Model Evaluation & Tuning
    { topicName: 'Confusion Matrix and Metrics (Accuracy, Precision, Recall, F1)', ytLink: '', isCompleted: false },
    { topicName: 'ROC Curve and AUC', ytLink: '', isCompleted: false },
    { topicName: 'Bias-Variance Tradeoff', ytLink: '', isCompleted: false },
    { topicName: 'Hyperparameter Tuning (GridSearchCV, RandomSearchCV)', ytLink: '', isCompleted: false },

    // Deep Learning
    { topicName: 'Introduction to Neural Networks', ytLink: '', isCompleted: false },
    { topicName: 'Activation Functions', ytLink: '', isCompleted: false },
    { topicName: 'Forward and Backpropagation', ytLink: '', isCompleted: false },
    { topicName: 'CNN (Convolutional Neural Networks)', ytLink: '', isCompleted: false },
    { topicName: 'RNN and LSTM (Sequential Data)', ytLink: '', isCompleted: false },

    // Tools and Libraries
    { topicName: 'Python for ML', ytLink: '', isCompleted: false },
    { topicName: 'NumPy and Pandas', ytLink: '', isCompleted: false },
    { topicName: 'Matplotlib and Seaborn', ytLink: '', isCompleted: false },
    { topicName: 'Scikit-Learn Basics', ytLink: '', isCompleted: false },
    { topicName: 'TensorFlow / Keras Basics', ytLink: '', isCompleted: false },
    { topicName: 'PyTorch Basics', ytLink: '', isCompleted: false },

    // Real-World Applications
    { topicName: 'Image Classification', ytLink: '', isCompleted: false },
    { topicName: 'Spam Detection', ytLink: '', isCompleted: false },
    { topicName: 'Sentiment Analysis', ytLink: '', isCompleted: false },
    { topicName: 'Recommendation Systems', ytLink: '', isCompleted: false },

    // Advanced Topics (Optional)
    { topicName: 'Transfer Learning', ytLink: '', isCompleted: false },
    { topicName: 'Generative Adversarial Networks (GANs)', ytLink: '', isCompleted: false },
    { topicName: 'Explainable AI (XAI)', ytLink: '', isCompleted: false },
    { topicName: 'Deployment using Flask or FastAPI', ytLink: '', isCompleted: false }
  ];

  toggleCompletion(topic: Topic) {
    topic.isCompleted = !topic.isCompleted;
  }
}