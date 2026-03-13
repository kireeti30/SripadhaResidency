import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  values = [
    { icon: '🙏', title: 'Devotion First', desc: 'Every service we offer is an act of devotion. We treat our guests as the Lord\'s own, with respect and care from the heart.' },
    { icon: '🌿', title: 'Purity & Cleanliness', desc: 'Our rooms are maintained to the highest standards of cleanliness. Sattvic environment with pure vegetarian  only.' },
    { icon: '💰', title: 'Honest Pricing', desc: 'Transparent, affordable pricing with no hidden charges. We believe every devotee deserves comfortable accommodation.' },
    { icon: '🔒', title: 'Safety & Security', desc: '24/7 security, CCTV surveillance, and trained staff ensure a safe and secure environment for all guests.' },
    { icon: '🌟', title: 'Continuous Improvement', desc: 'We listen to every piece of feedback and constantly improve to give our guests the best possible experience.' }
  ];

 
}
