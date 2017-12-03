import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { DataService } from '../data.service';
import { Order } from './../order';

@Component({
  selector: 'app-kit',
  templateUrl: './kit.component.html',
  styleUrls: ['./kit.component.scss']
})
export class KitComponent implements OnInit {
  dtOptions: any = {};
  orders: Order[] = [];
  dtTrigger: Subject<any> = new Subject();

  constructor(private _data: DataService) { }

  ngOnInit(): void {
    this._data.order.subscribe(res => this.orders = res);

    this.dtOptions = {
      responsive: true
    };
    // Calling the DT trigger to manually render the table
    this.dtTrigger.next();

  }
}
