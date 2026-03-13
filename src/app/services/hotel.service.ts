import { Injectable } from '@angular/core';

export interface Room {
  id: string;
  tag: string;
  name: string;
  emoji: string;
  gradientFrom: string;
  gradientTo: string;
  shortDesc: string;
  fullDesc: string;
  amenities: string[];
  price: number;
  priceUnit: string;
  badge?: string;
}

export interface Review {
  initial: string;
  name: string;
  location: string;
  rating: number;
  text: string;
}

@Injectable({ providedIn: 'root' })
export class HotelService {

  readonly phone = '+91 8985014479';
  readonly whatsapp = '918985014479';
  readonly email = 'info@sripadahomestay.com';
  readonly instagram = 'sripadahomestay';
  readonly address = 'Near Alipiri Gate, Tirumala Hills Road, Tirupati – 517 501, Andhra Pradesh';
  readonly mmtUrl = 'https://www.treebo.com/hotels-in-tirupati/treebo-sripadha-residency-alipiri-road-a-p-housing-board-colony-2840/?adgroupid=189923009698&checkin=2026-03-13&checkout=2026-03-14&ef_id=CjwKCAjw687NBhB4EiwAQ645drCiLEabEcB95_hXlJS0b1PrLfPfjdPE0A5g5mxSOZqosoW6XGA2ORoCOtsQAvD_BwE%3AG%3As&gad_campaignid=17209264500&gad_source=1&gbraid=0AAAAADhPswrtbhbpeFilKuktGoTi0H0nz&gclid=CjwKCAjw687NBhB4EiwAQ645drCiLEabEcB95_hXlJS0b1PrLfPfjdPE0A5g5mxSOZqosoW6XGA2ORoCOtsQAvD_BwE&hotel_id=2840&rateplan=fb97aaba96db48ba9a86fd905289dd0c&roomconfig=1-0&roomtype=oak&utm_campaign=TRB_Dynamic&utm_content=784734399100&utm_medium=google&utm_source=sem-dynamic&utm_term=';

  readonly rooms: Room[] = [
  {
    id: 'oak',
    tag: 'Standard',
    name: 'Oak Room',
    emoji: '🛏️',
    gradientFrom: '#C8520A',
    gradientTo: '#E8963A',
    shortDesc: 'Comfortable room with premium amenities for pilgrims visiting Tirupati.',
    fullDesc: 'The Oak Room at Treebo Sripadha Residency offers a comfortable and peaceful stay with modern amenities. Perfect for pilgrims visiting Tirumala and nearby temples.',
    amenities: [
      '❄️ Air Conditioning',
      '📶 Free WiFi',
      '📺 Television',
      '🚿 Hot Water',
      '🧴 Complimentary Toiletries',
      '🛎️ Room Service',
      '🧹 Daily Housekeeping'
    ],
    price: 1899,
    priceUnit: 'per night',
    badge: 'POPULAR'
  },
  {
    id: 'mahogany',
    tag: 'Premium',
    name: 'Deluxe Room',
    emoji: '🏨',
    gradientFrom: '#7A4015',
    gradientTo: '#E8C46A',
    shortDesc: 'Spacious premium room with modern amenities for a comfortable pilgrimage stay.',
  fullDesc: 'The Mahogany Premium Room offers a larger space with elegant interiors and modern comforts. Ideal for pilgrims and travelers who prefer extra space and premium amenities during their stay in Tirupati.',
  amenities: [
    
      '❄️ Air Conditioning',
      '📶 High-Speed WiFi',
      '📺 Smart TV',
      '🚿 24 Hour Hot Water',
      '🧴 Premium Toiletries',
      '🛎️ Room Service',
      '🧹 Daily Housekeeping'
    ],
    price: 2699,
    priceUnit: 'per night',
    badge: 'BEST VALUE'
  },
  {
    id: 'deluxe',
    tag: 'Premium',
    name: 'Suit Room',
    emoji: '🏨',
    gradientFrom: '#7A4015',
    gradientTo: '#E8C46A',
    shortDesc: 'Spacious room with modern interiors and comfortable bedding.',
    fullDesc: 'Our Deluxe Rooms provide extra comfort with premium furnishings and modern amenities, ensuring a relaxing stay for pilgrims and travelers.',
    amenities: [
      '❄️ Air Conditioning',
      '📶 High-Speed WiFi',
      '📺 Smart TV',
      '🚿 24 Hour Hot Water',
      '🧴 Premium Toiletries',
      '🛎️ Room Service',
      '🧹 Daily Housekeeping'
    ],
    price: 3499,
    priceUnit: 'per night',
    badge: 'Comfort'
  }
];
  

  readonly reviews: Review[] = [
    {
      initial: 'R', name: 'Ramesh Kumar', location: 'Chennai, Tamil Nadu', rating: 5,
      text: 'An absolute blessing of a stay. The rooms were spotless, and the staff treated us like family. Being so close to the temple made our darshan so convenient.'
    },
    {
      initial: 'P', name: 'Priya Venkatesh', location: 'Bengaluru, Karnataka', rating: 5,
      text: 'Perfect location, warm hospitality, and clean rooms. The family suite had a beautiful prayer space. We will always choose Sri Pada for our annual pilgrimage.'
    },
    {
      initial: 'S', name: 'Subramaniam A.', location: 'Hyderabad, Telangana', rating: 4,
      text: 'Very comfortable stay with helpful staff. Hot water was available all the time which is so important in Tirumala. Good vegetarian food options nearby too.'
    },
    {
      initial: 'L', name: 'Lakshmi Narayana', location: 'Vijayawada, AP', rating: 5,
      text: 'We stayed as a large family group of 12 and the team accommodated us beautifully. Affordable, clean, and very well located near the temple queue.'
    },
    {
      initial: 'M', name: 'Meena Krishnan', location: 'Coimbatore, Tamil Nadu', rating: 5,
      text: 'The deluxe room balcony view of the hills was breathtaking. The morning aarthi sounds from the temple were divine. Highly recommend for devotees.'
    },
    {
      initial: 'V', name: 'Venkat Rao', location: 'Pune, Maharashtra', rating: 4,
      text: 'Clean, affordable and staff is very cooperative. The location is ideal. Easy to get prasad and darshan tickets from here. Will book again on my next visit.'
    }
  ];

  getWhatsappLink(message: string): string {
    return `https://wa.me/${this.whatsapp}?text=${encodeURIComponent(message)}`;
  }
}
