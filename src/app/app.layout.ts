import {Component} from '@angular/core';

@Component({
  selector: '[app-layout]',
  template: `
    <div class="aside-inner">
      <nav data-sidebar-anyclick-close="" class="sidebar">
        <!-- START sidebar nav-->
        <ul class="nav menu">
          <!-- Iterates over all sidebar items-->
          <li *ngFor="let route of routes">
            <a
              [routerLink]="route.path"
              [title]="route.text"
              class="sideBar-nav-links"
              routerLinkActive="{{route.path === '' ? '' : 'active-link'}}"
            >
              <i class="icon-display fa fa-3 fa-{{route.icon}}"></i>
              <span>{{route.text}}</span>
            </a>
          </li>
        </ul>
        <!-- END sidebar nav-->
      </nav>
    </div>`,
  styleUrls: ['./app.layout.scss']
})
export class AppLayoutComponent {
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
      path: 'contact-us',
      text: 'Contact Us',
      icon: 'address-book-o'
    },
    {
      path: 'back-office',
      text: 'Back Office',
      icon: 'building'
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
      path: 'calendar',
      text: 'calendar',
      icon: 'calendar'
    },
  ];
}
