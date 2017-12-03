import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Order} from '../../order';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-new-ctm-order',
  templateUrl: './new-ctm-order.component.html',
  styleUrls: ['./new-ctm-order.component.scss']
})
export class NewCtmOrderComponent implements OnInit {
  order = new Order();
  orders: Order[] = [];

  constructor(private router: Router, private _data: DataService) {
  }

  ngOnInit() {
    this._data.order.subscribe(res => this.orders = res);
  }

  addOrder() {
    this.order.id = Math.floor(Math.random() * 20000);
    this.order.ship_date = Date.now();
    this.order.stat_order = true;

    this.orders.push(this.order);
    this._data.changeOrder(this.orders);
    this.router.navigate(['kit']);
  }
}
