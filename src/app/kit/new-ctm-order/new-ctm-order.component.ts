import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-new-ctm-order',
  templateUrl: './new-ctm-order.component.html',
  styleUrls: ['./new-ctm-order.component.scss']
})
export class NewCtmOrderComponent implements OnInit {
  orders: any;

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.order.subscribe(res => this.orders = res);
  }

}
