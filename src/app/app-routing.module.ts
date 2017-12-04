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
  {path: '', component: HomeComponent},
  {path: 'kit', component: KitComponent},
  {path: 'back-office', component: BackOfficeComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'operations', component: OperationsComponent},
  {path: 'logistics', component: LogisticsComponent},
  {path: 'study-management', component: StudyManagementComponent},
  {path: 'user', component: UserComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'kit/supply-items', component: SupplyItemsComponent},
  {path: 'kit/ctm-facility-setup', component: CtmFacilitySetupComponent},
  {path: 'kit/new-ctm-order', component: NewCtmOrderComponent},
  {path: 'kit/edit-ctm-order/:id', component: EditCtmOrderComponent},
  {path: 'kit/ctm-facility-daily-staffing', component: CtmFacilityDailyStaffingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
