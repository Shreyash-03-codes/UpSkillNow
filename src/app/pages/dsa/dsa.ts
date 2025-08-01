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
  selector: 'app-dsa',
  templateUrl: './dsa.html',
  styleUrls: ['./dsa.css'],
  imports:[TopicCard,FormsModule,CommonModule]
})
export class Dsa {
  topicsList: Topic[] = [
    // Basics
    { topicName: 'Introduction to DSA', ytLink: 'https://youtu.be/cOSTc6qBRQw?si=P7AzOoJHXIB2bDi8', isCompleted: false },
    { topicName: 'Time and Space Complexity', ytLink: 'https://youtu.be/PwKv8fOcriM?si=Juz6-TS1-ZFMHbU_', isCompleted: false },


    // Arrays & Strings
    { topicName: 'Arrays Basics & Implementation', ytLink: 'https://youtu.be/8wmn7k1TTcI?si=UTRczzUQ24qlMC-o', isCompleted: false },
    { topicName: 'Linear Search Algorithm', ytLink: 'https://youtu.be/_HRA37X8N_Q?si=OvEgFLECWYYaPgJ8', isCompleted: false },
       { topicName: 'Binary Search Algorithm', ytLink: 'https://youtu.be/f6UU7V3szVw?si=lR1gpbCU2Zinjwpn', isCompleted: false },

    { topicName: 'Sorting Algorithms (Bubble, Selection, Insertion)', ytLink: 'https://youtu.be/f6UU7V3szVw?si=lR1gpbCU2Zinjwpn', isCompleted: false },
    { topicName: 'Advanced Sorting (Merge, Quick, Heap Sort)', ytLink: '', isCompleted: false },
    { topicName: 'Two Pointer Technique', ytLink: '', isCompleted: false },
    { topicName: 'Sliding Window Technique', ytLink: '', isCompleted: false },
    { topicName: 'Prefix Sum Technique', ytLink: '', isCompleted: false },
    { topicName: 'String Manipulations', ytLink: '', isCompleted: false },
    { topicName: 'Pattern Matching (KMP, Z Algorithm)', ytLink: '', isCompleted: false },

    // Recursion & Backtracking
    { topicName: 'Recursion Basics', ytLink: '', isCompleted: false },
    { topicName: 'Backtracking Basics', ytLink: '', isCompleted: false },
    { topicName: 'N-Queens Problem', ytLink: '', isCompleted: false },
    { topicName: 'Sudoku Solver', ytLink: '', isCompleted: false },
    { topicName: 'Rat in a Maze', ytLink: '', isCompleted: false },

    // Linked List
    { topicName: 'Singly Linked List', ytLink: '', isCompleted: false },
    { topicName: 'Doubly Linked List', ytLink: '', isCompleted: false },
    { topicName: 'Cycle Detection (Floyd`s Algorithm)', ytLink: '', isCompleted: false },
    { topicName: 'Reverse Linked List', ytLink: '', isCompleted: false },
    { topicName: 'Intersection of Two Linked Lists', ytLink: '', isCompleted: false },

    // Stack & Queue
    { topicName: 'Stack Implementation', ytLink: '', isCompleted: false },
    { topicName: 'Queue and Circular Queue', ytLink: '', isCompleted: false },
    { topicName: 'Next Greater Element', ytLink: '', isCompleted: false },
    { topicName: 'Valid Parentheses', ytLink: '', isCompleted: false },
    { topicName: 'LRU Cache (Using Deque + HashMap)', ytLink: '', isCompleted: false },

    // Trees
    { topicName: 'Binary Tree Basics', ytLink: '', isCompleted: false },
    { topicName: 'Binary Search Tree (BST)', ytLink: '', isCompleted: false },
    { topicName: 'Tree Traversals (Inorder, Preorder, Postorder)', ytLink: '', isCompleted: false },
    { topicName: 'Level Order Traversal (BFS)', ytLink: '', isCompleted: false },
    { topicName: 'Lowest Common Ancestor (LCA)', ytLink: '', isCompleted: false },
    { topicName: 'Diameter of a Binary Tree', ytLink: '', isCompleted: false },

    // Heap & Priority Queue
    { topicName: 'Heap Basics', ytLink: '', isCompleted: false },
    { topicName: 'Min Heap & Max Heap', ytLink: '', isCompleted: false },
    { topicName: 'Top K Elements', ytLink: '', isCompleted: false },
    { topicName: 'Kth Largest/Smallest Element', ytLink: '', isCompleted: false },

    // Hashing
    { topicName: 'HashMap / HashSet Usage', ytLink: '', isCompleted: false },
    { topicName: 'Frequency Counter Pattern', ytLink: '', isCompleted: false },
    { topicName: 'Subarray with 0 Sum', ytLink: '', isCompleted: false },
    { topicName: 'Group Anagrams', ytLink: '', isCompleted: false },

    // Greedy Algorithms
    { topicName: 'Greedy Strategy Overview', ytLink: '', isCompleted: false },
    { topicName: 'Activity Selection Problem', ytLink: '', isCompleted: false },
    { topicName: 'Huffman Encoding', ytLink: '', isCompleted: false },
    { topicName: 'Fractional Knapsack', ytLink: '', isCompleted: false },

    // Divide and Conquer
    { topicName: 'Merge Sort', ytLink: '', isCompleted: false },
    { topicName: 'Quick Sort', ytLink: '', isCompleted: false },
    { topicName: 'Binary Search Variants', ytLink: '', isCompleted: false },

    // Dynamic Programming (DP)
    { topicName: 'DP Introduction & Memoization vs Tabulation', ytLink: '', isCompleted: false },
    { topicName: 'Fibonacci DP', ytLink: '', isCompleted: false },
    { topicName: '0/1 Knapsack Problem', ytLink: '', isCompleted: false },
    { topicName: 'Longest Common Subsequence (LCS)', ytLink: '', isCompleted: false },
    { topicName: 'Longest Increasing Subsequence (LIS)', ytLink: '', isCompleted: false },
    { topicName: 'Matrix Chain Multiplication', ytLink: '', isCompleted: false },
    { topicName: 'DP on Grids & Paths', ytLink: '', isCompleted: false },

    // Graphs
    { topicName: 'Graph Representation (Adjacency List/Matrix)', ytLink: '', isCompleted: false },
    { topicName: 'Breadth-First Search (BFS)', ytLink: '', isCompleted: false },
    { topicName: 'Depth-First Search (DFS)', ytLink: '', isCompleted: false },
    { topicName: 'Topological Sorting', ytLink: '', isCompleted: false },
    { topicName: 'Cycle Detection in Graphs', ytLink: '', isCompleted: false },
    { topicName: 'Dijkstra`s Algorithm', ytLink: '', isCompleted: false },
    { topicName: 'Bellman-Ford Algorithm', ytLink: '', isCompleted: false },
    { topicName: 'Floyd-Warshall Algorithm', ytLink: '', isCompleted: false },
    { topicName: 'Minimum Spanning Tree (Prim`s/Kruskal`s)', ytLink: '', isCompleted: false },

    // Tries and Advanced Topics
    { topicName: 'Trie Basics', ytLink: '', isCompleted: false },
    { topicName: 'Insert/Search in Trie', ytLink: '', isCompleted: false },
    { topicName: 'Word Search using Trie', ytLink: '', isCompleted: false },

    // Practice & Patterns
    { topicName: 'Sliding Window Problems', ytLink: '', isCompleted: false },
    { topicName: 'Two Pointers Problems', ytLink: '', isCompleted: false },
    { topicName: 'Bit Manipulation Tricks', ytLink: '', isCompleted: false },
    { topicName: 'Math Problems & Number Theory', ytLink: '', isCompleted: false },
    { topicName: 'Backtracking Mastery Set', ytLink: '', isCompleted: false },
  ];

  toggleCompletion(topic: Topic) {
    topic.isCompleted = !topic.isCompleted;
  }
}