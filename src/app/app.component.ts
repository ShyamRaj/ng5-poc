import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isHome: boolean;

  constructor(private router: Router) {
    this.router.events.subscribe(e => (e && (this.isHome = !(this.router.url === '/'))));
  }
}
