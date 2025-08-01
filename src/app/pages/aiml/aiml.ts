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
        { topicName: 'introduction to artificial intelligence', ytLink: 'https://youtu.be/SSE4M0gcmvE?si=vaASgk02WdVZDwSZ', isCompleted: false },
    { topicName: 'Introduction to Machine Learning', ytLink: 'https://youtu.be/7uwa9aPbBRU?si=6J9DVt3cbVJ4ImIp', isCompleted: false },
    { topicName: 'Types of Machine Learning (Supervised, Unsupervised, Reinforcement)', ytLink: 'https://youtu.be/4dwsSz_fNSQ?si=jkGOeRzXgIU7xGMR', isCompleted: false },
    { topicName: 'Machine Learning Life Cycle', ytLink: 'https://youtu.be/iDbhQGz_rEo?si=Rqa5q-mgGeRNCBaf', isCompleted: false },
    { topicName: 'Basic Terminologies in ML', ytLink: 'https://youtu.be/lWhzNe58KmU?si=wjfLzLF1vENKFTYD', isCompleted: false },

    // Mathematics for ML
    { topicName: 'Linear Algebra Basics', ytLink: 'https://youtu.be/pvMkV_NoskI?si=evXvQUTlapP-mfDR', isCompleted: false },
    { topicName: 'Probability & Statistics', ytLink: 'https://youtu.be/vEwe_1b1Df0?si=spTGsTkEnR5kECuK', isCompleted: false },
    { topicName: 'Calculus for ML (Derivatives, Gradients)', ytLink: 'https://youtu.be/0-reLsDhAPg?si=gfGzBE6FqhAOA50l', isCompleted: false },
    { topicName: 'Optimization Techniques (Gradient Descent)', ytLink: 'https://youtu.be/Aym1Gx2wVK4?si=yt5PTVB-Y7_1lPCU', isCompleted: false },

    // Data Handling
    { topicName: 'Data Preprocessing', ytLink: 'https://youtu.be/9uvIazKs2uI?si=xb4kIAhW2lmhQru7', isCompleted: false },
    { topicName: 'Feature Engineering', ytLink: 'https://youtu.be/pYVScuY-GPk?si=W1K3moirW0Y9jasA', isCompleted: false },
    { topicName: 'Handling Missing Data & Outliers', ytLink: 'https://youtu.be/KfC7VfDfn8I?si=1hMfU5hTtuRngIkX', isCompleted: false },
    { topicName: 'Train-Test Split and Cross Validation', ytLink: 'https://youtu.be/v6DtYYafrWQ?si=HVRrobtwAMYSe63U', isCompleted: false },

    // Core Machine Learning Algorithms
    { topicName: 'Linear Regression', ytLink: 'https://youtu.be/zUQr6HAAKp4?si=hvUztdOPvyDgka-9', isCompleted: false },
    { topicName: 'Logistic Regression', ytLink: 'https://youtu.be/r8OjlgWpAI0?si=jGahdi2D15LLnEoG', isCompleted: false },
    { topicName: 'Decision Trees & Random Forest', ytLink: 'https://youtu.be/DXqxXe3rep0?si=x0D_0T8LP5nW8TnQ', isCompleted: false },
    { topicName: 'K-Nearest Neighbors (KNN)', ytLink: 'https://youtu.be/O1nWXTXcCwI?si=XaFeDor5XNxvUd9L', isCompleted: false },
    { topicName: 'Support Vector Machines (SVM)', ytLink: 'https://youtu.be/NDqACjz5j8g?si=QexD7jeoN0WtkG2l', isCompleted: false },
    { topicName: 'Naive Bayes Classifier', ytLink: 'https://youtu.be/GBMMtXRiQX0?si=F_ejlKfp2LSXx-bf', isCompleted: false },
    { topicName: 'Clustering (K-Means, DBSCAN)', ytLink: 'https://youtu.be/5FpsGnkbEpM?si=d-fWEmkpTbdHOoMD', isCompleted: false },

    // Model Evaluation & Tuning
    { topicName: 'Confusion Matrix and Metrics (Accuracy, Precision, Recall, F1)', ytLink: 'https://youtu.be/AyP85ocS-8Y?si=3-DurH8sV7-ffFLE', isCompleted: false },
    { topicName: 'ROC Curve and AUC', ytLink: 'https://youtu.be/A_ZKMsZ3f3o?si=USzOaR5WEMFtTnk_', isCompleted: false },
    { topicName: 'Bias-Variance Tradeoff', ytLink: 'https://youtu.be/O-qONAxkvK0?si=o-rG6rZTmrP5U0Hn', isCompleted: false },
    { topicName: 'Hyperparameter Tuning (GridSearchCV, RandomSearchCV)', ytLink: 'https://youtu.be/HdlDYng8g9s?si=kHuCTfQu5pOJIidV', isCompleted: false },

    // Deep Learning
    { topicName: 'Introduction to Neural Networks', ytLink: 'https://youtu.be/EYeF2e2IKEo?si=WMWXsorLjFMFwNv2', isCompleted: false },
    { topicName: 'Activation Functions', ytLink: 'https://youtu.be/hgARO7_a0n0?si=dKYXq3ZpjAnVdZ26', isCompleted: false },
    { topicName: 'Forward and Backpropagation', ytLink: 'https://youtu.be/QZ8ieXZVjuE?si=75obfVfxS6MHh9Yx', isCompleted: false },
    { topicName: 'CNN (Convolutional Neural Networks)', ytLink: 'https://youtu.be/zfiSAzpy9NM?si=GTMZiKFpb6XwUzXp', isCompleted: false },
    { topicName: 'RNN and LSTM (Sequential Data)', ytLink: 'https://youtu.be/LfnrRPFhkuY?si=sZv-x4Fp-BSBaM0x', isCompleted: false },

    // Tools and Libraries
    { topicName: 'Python for ML', ytLink: 'https://youtu.be/UrsmFxEIp5k?si=VeLdRi5frqwnxHIq', isCompleted: false },
    { topicName: 'NumPy and Pandas', ytLink: 'https://youtu.be/x7ULDYs4X84?si=nSTRXOQzbxZwJXlP', isCompleted: false },
    { topicName: 'Matplotlib and Seaborn', ytLink: 'https://youtu.be/UZDP9IPMqcs?si=uSoqsqEFAHLM9JmL', isCompleted: false },
    { topicName: 'Scikit-Learn Basics', ytLink: 'https://youtu.be/0B5eIE_1vpU?si=iONlBpMgl62YinFh', isCompleted: false },
    { topicName: 'TensorFlow / Keras Basics', ytLink: 'https://youtu.be/qFJeN9V1ZsI?si=HehNT2M0Bqm86_sb', isCompleted: false },
    { topicName: 'PyTorch Basics', ytLink: 'https://youtu.be/OIenNRt2bjg?si=Lcd7l-y4e6KbaRQk', isCompleted: false },

    // Real-World Applications
    { topicName: 'Image Classification', ytLink: 'https://youtu.be/taC5pMCm70U?si=1m28YBbUC0KBcH1p', isCompleted: false },
    { topicName: 'Spam Detection', ytLink: 'https://youtu.be/YncZ0WwxyzU?si=GcfsYZSVWZLh2b3g', isCompleted: false },
    { topicName: 'Sentiment Analysis', ytLink: 'https://youtu.be/4YGkfAd2iXM?si=p-HKasH2TMpcT3FU', isCompleted: false },
    { topicName: 'Recommendation Systems', ytLink: 'https://youtu.be/1xtrIEwY_zY?si=Z0zaEiEggAzRAivK', isCompleted: false },

    // Advanced Topics (Optional)
    { topicName: 'Transfer Learning', ytLink: 'https://youtu.be/LsdxvjLWkIY?si=bYrkcgxJ-kpgvlms', isCompleted: false },
    { topicName: 'Generative Adversarial Networks (GANs)', ytLink: 'https://youtu.be/Fe1MzID2BNg?si=4YMJXrCym3RpVR0j', isCompleted: false },
    { topicName: 'Explainable AI (XAI)', ytLink: 'https://youtu.be/vNup3PygoWI?si=KX_7ntEojMTld0Sz', isCompleted: false },
    { topicName: 'Deployment using Flask or FastAPI', ytLink: 'https://youtu.be/Wr1JjhTt1Xg?si=kXQPm_0-UcUQMR1G', isCompleted: false }
  ];

  toggleCompletion(topic: Topic) {
    topic.isCompleted = !topic.isCompleted;
  }
}