import {Component, OnInit} from '@angular/core';
import {Order} from '../../order';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'cat-page',
  templateUrl: './edit-ctm-order.component.html',
  styleUrls: ['./edit-ctm-order.component.scss']
})

export class EditCtmOrderComponent implements OnInit {
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

