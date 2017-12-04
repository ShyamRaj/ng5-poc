import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { DataTablesModule } from 'angular-datatables';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { CalendarUtilsModule } from './calendar-utils/calendar.module';
import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from './app.layout';
import { HomeComponent } from './home/home.component';
import { KitComponent } from './kit/kit.component';
import { SupplyItemsComponent } from './kit/supply-items/supply-items.component';
import { CtmFacilitySetupComponent } from './kit/ctm-facility-setup/ctm-facility-setup.component';
import { NewCtmOrderComponent } from './kit/new-ctm-order/new-ctm-order.component';
import { EditCtmOrderComponent } from './kit/edit-ctm-order/edit-ctm-order.component';
import { CtmFacilityDailyStaffingComponent } from './kit/ctm-facility-daily-staffing/ctm-facility-daily-staffing.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BackOfficeComponent } from './back-office/back-office.component';
import { OperationsComponent } from './operations/operations.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { StudyManagementComponent } from './study-management/study-management.component';
import { UserComponent } from './user/user.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    HomeComponent,
    KitComponent,
    SupplyItemsComponent,
    CtmFacilitySetupComponent,
    NewCtmOrderComponent,
    EditCtmOrderComponent,
    CtmFacilityDailyStaffingComponent,
    ContactUsComponent,
    BackOfficeComponent,
    OperationsComponent,
    LogisticsComponent,
    StudyManagementComponent,
    UserComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    CalendarUtilsModule,
    DataTablesModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
