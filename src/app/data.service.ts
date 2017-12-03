import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()

export class DataService {

  private orders = new BehaviorSubject<any>([
    {
      'id': '1123123',
      'study': '100214 DP Study',
      'site': '002',
      'shipment': 'n/a',
      'status': 'Pending',
      'type': 'Initial Supply',
      'date': '01/Dec/2017',
      'ship_date': '02/Dec/2017',
      'ctm_facility': 'Q2 Atlanta - Marietta',
      'pm_approval_status': 'n/a',
      'import_approval_status': 'n/a',
      'stat_order': ''
    },
    {
      'id': '6723512',
      'study': '12312 OP Study',
      'site': '012',
      'shipment': 'n/a',
      'status': 'Pending',
      'type': 'Resupply',
      'date': '28/Nov/2017',
      'ship_date': '01/Dev/2017',
      'ctm_facility': 'Q2 Atlanta - Marietta',
      'pm_approval_status': 'n/a',
      'import_approval_status': 'n/a',
      'stat_order': ''
    }
  ]);
  order = this.orders.asObservable();

  constructor(private http: Http) {
    this.http.get('assets/data.json')
      .map(this.extractData)
      .subscribe(payload => {
        this.orders = payload;
      });
  }

  changeOrder(order) {
    this.orders.next(order);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }

}
