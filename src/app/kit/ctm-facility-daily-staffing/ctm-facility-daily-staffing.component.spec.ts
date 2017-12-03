import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtmFacilityDailyStaffingComponent } from './ctm-facility-daily-staffing.component';

describe('CtmFacilityDailyStaffingComponent', () => {
  let component: CtmFacilityDailyStaffingComponent;
  let fixture: ComponentFixture<CtmFacilityDailyStaffingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtmFacilityDailyStaffingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtmFacilityDailyStaffingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
