import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
    <a class="wa-float"
       href="https://wa.me/918985014479?text=Hello%20Sri%20Pada%20Homestay%2C%20I%20want%20to%20enquire%20about%20a%20booking."
       target="_blank"
       title="Chat on WhatsApp"
       aria-label="Chat on WhatsApp">💬</a>
  `
})
export class AppComponent {}
