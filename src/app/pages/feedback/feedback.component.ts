import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  feedbackSubmitted = false;

  feedback = {
    name: '',
    email: '',
    roomType: 'Standard Room',
    rating: 0,
    message: ''
  };

  constructor(private http: HttpClient) {}

  setRating(star: number) {
    this.feedback.rating = star;
  }

  getStars(count: number): number[] {
    return [1, 2, 3, 4, 5];
  }

  submitFeedback() {
    const formId = 'mnjgveyp'; // ✅ your Formspree ID

    const payload = {
      name: this.feedback.name,
      email: this.feedback.email,
      room: this.feedback.roomType,
      rating: '★'.repeat(this.feedback.rating),
      message: this.feedback.message
    };

    this.http.post(`https://formspree.io/f/${formId}`, payload).subscribe({
      next: () => {
        this.feedbackSubmitted = true;
        this.feedback = { name: '', email: '', roomType: 'Standard Room', rating: 0, message: '' };
        setTimeout(() => this.feedbackSubmitted = false, 5000);
      },
      error: () => {
        alert('Something went wrong. Please try again.');
      }
    });
  }
}