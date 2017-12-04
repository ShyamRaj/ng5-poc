import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isHome: boolean;
  routes: Array<Object> = [
    {
      path: '',
      text: 'Home',
      icon: 'home'
    },
    {
      path: 'kit',
      text: 'Kit Production',
      icon: 'medkit'
    },
    {
      path: 'operations',
      text: 'Operations',
      icon: 'gears'
    },
    {
      path: 'logistics',
      text: 'Logistics',
      icon: 'truck'
    },
    {
      path: 'calendar',
      text: 'calendar',
      icon: 'calendar'
    },
    {
      path: 'back-office',
      text: 'Back Office',
      icon: 'building'
    },
    {
      path: 'study-management',
      text: 'Study Management',
      icon: 'book'
    },
    {
      path: 'user',
      text: 'User Management',
      icon: 'user'
    },
    {
      path: 'contact-us',
      text: 'Contact Us',
      icon: 'address-book-o'
    }
  ];

  constructor(private router: Router) {
    this.router.events.subscribe(e => (e && (this.isHome = !(this.router.url === '/'))));
  }
}
