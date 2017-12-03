import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtmFacilitySetupComponent } from './ctm-facility-setup.component';

describe('CtmFacilitySetupComponent', () => {
  let component: CtmFacilitySetupComponent;
  let fixture: ComponentFixture<CtmFacilitySetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtmFacilitySetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtmFacilitySetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
