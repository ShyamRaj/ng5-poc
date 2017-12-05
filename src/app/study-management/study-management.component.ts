import { Component, OnInit } from '@angular/core';
import {Order} from '../order';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'cat-page',
  templateUrl: './study-management.component.html',
  styleUrls: ['./study-management.component.scss']
})
export class StudyManagementComponent implements OnInit {
  order = new Order();
  orders: Order[] = [];

  ngOnInit() {

    $(function () {

      $("#example-icons").steps({
        headerTag:  'h3',
        bodyTag:  'section',
        transitionEffect:  'slideLeft',
        autoFocus: true
      });
    });

  }
}
