import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HotelService } from '../../services/hotel.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formSubmitted = false;

  inquiry = {
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  };

  contactCards = [
    {
      icon: '📞',
      iconClass: 'ci-phone',
      title: 'Phone',
      lines: ['+91 8985014479', '+91 9440477067'],
      note: 'Available 6 AM – 10 PM daily',
      href: 'tel:+918985014479'
    },
    {
      icon: '💬',
      iconClass: 'ci-wa',
      title: 'WhatsApp',
      lines: ['+91 8985014479'],
      note: 'Quick booking & enquiries',
      href: 'https://wa.me/918985014479'
    },
    {
      icon: '📸',
      iconClass: 'ci-ig',
      title: 'Instagram',
      lines: ['@sripadaresidency'],
      note: 'See our rooms & moments',
      href: 'https://instagram.com/sripadahomestay'
    },
    {
      icon: '✉️',
      iconClass: 'ci-mail',
      title: 'Email',
      lines: ['info@sripadaresidency.com'],
      note: 'We reply within 12 hours',
      href: 'mailto:info@sripadaresidency.com'
    }
  ];

  constructor(public hotelService: HotelService) {}

  submitInquiry() {
    const msg = `🙏 Enquiry from ${this.inquiry.name}\n\nPhone: ${this.inquiry.phone}\nEmail: ${this.inquiry.email}\nSubject: ${this.inquiry.subject}\n\nMessage: ${this.inquiry.message}`;
    window.open(this.hotelService.getWhatsappLink(msg), '_blank');
    this.formSubmitted = true;
    this.inquiry = { name: '', phone: '', email: '', subject: '', message: '' };
    setTimeout(() => this.formSubmitted = false, 5000);
  }

  openWhatsApp() {
    window.open('https://wa.me/918985014479?text=Hello%20Sri%20Pada%20Homestay%2C%20I%20would%20like%20to%20make%20an%20enquiry.', '_blank');
  }

  openInstagram() {
    window.open('https://instagram.com/sripadaresidency', '_blank');
  }
}
