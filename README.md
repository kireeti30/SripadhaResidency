# Sri Pada Homestay – Angular Website

A complete Angular 17 website for Sri Pada Homestay, Tirumala.

## Pages
- **Home** – Hero, Room preview, Booking form, Testimonials, Feedback form
- **Rooms** – Full room details with MakeMyTrip booking links
- **About** – Homestay story & values
- **Contact** – Phone, WhatsApp, Instagram, Email, Google Maps

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Install & Run
```bash
npm install
ng serve
```
Open https://sripadaresidency.netlify.app/

### Build for Production
```bash
ng build
```
Output goes to `dist/sripada-homestay/`

## Customization

### Update Contact Info
Edit `src/app/services/hotel.service.ts` — all phone numbers, addresses, social links are in one place.

### Add Images
Replace placeholder images in `src/assets/images/`:
- `hero-bg.jpg` – Hero section background
- `room-standard.jpg`, `room-deluxe.jpg`, `room-family.jpg`, `room-dorm.jpg` – Room images
- `logo.png` – Hotel logo

### Update MakeMyTrip Link
In `src/app/pages/rooms/rooms.component.ts`, update the `mmtUrl` property with your actual MakeMyTrip property URL.

## Theme Colors
Edit `src/styles.css` CSS variables:
```css
--saffron: #C8520A;
--gold: #C9973A;
--cream: #F7F0E6;
```
