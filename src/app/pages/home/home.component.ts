import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HotelService, Room, Review } from '../../services/hotel.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  rooms: Room[] = [];
  reviews: Review[] = [];
  feedbackSubmitted = false;
  bookingSubmitted = false;

  // Booking form model
  booking = {
    name: '',
    phone: '',
    checkin: '',
    checkout: '',
    roomType: '',
    guests: '2'
  };

  // Feedback form model
  feedback = {
    name: '',
    email: '',
    roomType: 'Standard Room',
    rating: 0,
    message: ''
  };

  stats = [
    { num: '20', label: 'Rooms' },
    { num: '4.1 ★', label: 'Rating' },
    { num: '6K+', label: 'Happy Guests' },
    { num: '5+', label: 'Years of Service' }
  ];

  constructor(private hotelService: HotelService,
      private http: HttpClient

  ) {}

  ngOnInit() {
    this.rooms = this.hotelService.rooms;
    this.reviews = this.hotelService.reviews.slice(0, 3);
  }

  setRating(star: number) {
    this.feedback.rating = star;
  }

  submitBooking() {
    const msg = `🙏 Booking Request\n\nName: ${this.booking.name}\nPhone: ${this.booking.phone}\nRoom: ${this.booking.roomType}\nCheck-in: ${this.booking.checkin}\nCheck-out: ${this.booking.checkout}\nGuests: ${this.booking.guests}\n\nPlease confirm my booking.`;
    window.open(this.hotelService.getWhatsappLink(msg), '_blank');
    this.bookingSubmitted = true;
    setTimeout(() => this.bookingSubmitted = false, 4000);
  }

  submitFeedback() {
  const formId = 'mnjgveyp'; // ✏️ replace with your Formspree form ID

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

  getStars(rating: number): string[] {
    return Array.from({ length: 5 }, (_, i) => i < rating ? '★' : '☆');
  }
}
