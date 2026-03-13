import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelService, Room } from '../../services/hotel.service';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit {
  rooms: Room[] = [];

  constructor(private hotelService: HotelService) {}

  ngOnInit() {
    this.rooms = this.hotelService.rooms;
  }

  bookOnMakeMyTrip(room: Room) {
  window.open(this.hotelService.mmtUrl, '_blank');
  // mmtUrl now points to Treebo — update button label in HTML too
}

  bookOnWhatsApp(room: Room) {
    const msg = `🙏 Hello Sri Pada Residency, I'd like to book a ${room.name} (₹${room.price}/${room.priceUnit}). Please share availability and confirm.`;
    window.open(this.hotelService.getWhatsappLink(msg), '_blank');
  }
}
