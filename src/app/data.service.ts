import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()

export class DataService {

  private orders = new BehaviorSubject<any>([]);
  order = this.orders.asObservable();

  constructor(private http: Http) {
    this.http.get('assets/data.json')
      .map(this.extractData)
      .subscribe(payload => {
        this.changeOrder(payload);
      });
  }

  changeOrder(orders) {
    this.orders.next(orders);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }

}
