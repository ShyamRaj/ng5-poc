import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCtmOrderComponent } from './new-ctm-order.component';

describe('NewCtmOrderComponent', () => {
  let component: NewCtmOrderComponent;
  let fixture: ComponentFixture<NewCtmOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCtmOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCtmOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
