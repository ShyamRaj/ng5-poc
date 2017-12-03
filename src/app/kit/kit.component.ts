import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { DataService } from '../data.service';

class Order {
  id: number;
  study: any;
  site: any;
  shipment: any;
  status: any;
  type: any;
  date: any;
  ship_date: any;
  ctm_facility: any;
  pm_approval_status: any;
  import_approval_status: any;
  stat_order: any;
}

@Component({
  selector: 'app-kit',
  templateUrl: './kit.component.html',
  styleUrls: ['./kit.component.scss']
})
export class KitComponent implements OnInit {
  dtOptions: any = {};
  orders: any = [];
  dtTrigger: Subject<any> = new Subject();

  constructor(private _data: DataService) { }

  ngOnInit(): void {
    this._data.order.subscribe(res => this.orders = res);
    // Calling the DT trigger to manually render the table
    this.dtTrigger.next();

    console.log('thiahosi', this.orders);
    this.dtOptions = {
      responsive: true
    };
  }
}
