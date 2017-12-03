import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map';

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
  dtOptions: DataTables.Settings = {};
  orders: Order[] = [];
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();

  constructor(private http: Http) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.http.get('https://lotfops-qa-cluster.eastus.cloudapp.azure.com/KitProduction/CtmServiceApi/CTM/GetCtmSlottingDateByFacility?slotDateCount=10000&facilityId=183d0951-04a6-46c8-b6c0-47899e62ba98&startDate=2017-11-01')
      .map(this.extractData)
      .subscribe(payload => {
        console.log(payload)
        this.orders = payload.data;
        // Calling the DT trigger to manually render the table
        console.log(this.orders);
        this.dtTrigger.next();
      });
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }
}
