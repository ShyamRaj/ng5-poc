import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCtmOrderComponent } from './edit-ctm-order.component';

describe('EditCtmOrderComponent', () => {
  let component: EditCtmOrderComponent;
  let fixture: ComponentFixture<EditCtmOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCtmOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCtmOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
