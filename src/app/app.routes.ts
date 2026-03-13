import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Sri Pada Homestay – Tirumala'
  },
  {
    path: 'rooms',
    loadComponent: () => import('./pages/rooms/rooms.component').then(m => m.RoomsComponent),
    title: 'Rooms – Sri Pada Homestay'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About Us – Sri Pada Homestay'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact – Sri Pada Homestay'
  },
  {
  path: 'feedback',
  loadComponent: () => import('./pages/feedback/feedback.component').then(m => m.FeedbackComponent),
  title: 'Feedback – Sri Pada Homestay'
},
  { path: '**', redirectTo: '' }
];
