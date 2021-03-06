import {Component, HostListener, OnInit, AfterViewChecked} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { DataService } from '../data.service';
import { Order } from './../order';

@Component({
  selector: 'app-kit',
  templateUrl: './kit.component.html',
  styleUrls: ['./kit.component.scss']
})
export class KitComponent implements OnInit, AfterViewChecked {
  dtOptions: any = {};
  orders: Order[] = [];
  dtTrigger: Subject<any> = new Subject();
  innerWidth: any;

  constructor(private _data: DataService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      showEntries: false,
      responsive: true
    };

    this._data.order.subscribe(res => this.orders = res);
    // Calling the DT trigger to manually render the table
    this.dtTrigger.next();

  }

  ngAfterViewChecked() {
    console.log('checked');
    this.dtTrigger.next();
  }

  deleteOrder(id) {
    this._data.changeOrder(this.orders.filter(obj => obj.id !== id));
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
    this.dtTrigger.next();
  }
}
