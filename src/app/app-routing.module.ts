import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {KitComponent} from './kit/kit.component';
import {SupplyItemsComponent} from './kit/supply-items/supply-items.component';
import {CtmFacilitySetupComponent} from './kit/ctm-facility-setup/ctm-facility-setup.component';
import {NewCtmOrderComponent} from './kit/new-ctm-order/new-ctm-order.component';
import {EditCtmOrderComponent} from './kit/edit-ctm-order/edit-ctm-order.component';
import {CtmFacilityDailyStaffingComponent} from './kit/ctm-facility-daily-staffing/ctm-facility-daily-staffing.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {BackOfficeComponent} from './back-office/back-office.component';
import {OperationsComponent} from './operations/operations.component';
import {LogisticsComponent} from './logistics/logistics.component';
import {StudyManagementComponent} from './study-management/study-management.component';
import {UserComponent} from './user/user.component';
import {CalendarComponent} from './calendar/calendar.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'kit',
    component: KitComponent,
    children: [
      {path: 'supply-items', component: SupplyItemsComponent},
      {path: 'ctm-facility-setup', component: CtmFacilitySetupComponent},
      {path: 'new-ctm-order', component: NewCtmOrderComponent},
      {path: 'edit-ctm-order', component: EditCtmOrderComponent},
      {path: 'ctm-facility-daily-staffing', component: CtmFacilityDailyStaffingComponent}
    ]
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'back-office',
    component: BackOfficeComponent
  },
  {
    path: 'operations',
    component: OperationsComponent
  },
  {
    path: 'logistics',
    component: LogisticsComponent
  },
  {
    path: 'study-management',
    component: StudyManagementComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
