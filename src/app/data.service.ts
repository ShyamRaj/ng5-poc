import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService {

  private data = new BehaviorSubject<any>(['some data', 'some other data']);
  dataObservable = this.data.asObservable();

  constructor() { }

}
