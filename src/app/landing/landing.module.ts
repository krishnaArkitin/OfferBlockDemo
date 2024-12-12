import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DemoDashboardComponent } from './demo-dashboard/demo-dashboard.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyOffersComponent } from './my-offers/my-offers.component';
import { VerificationComponent } from './verification/verification.component';
import { TravelComponent } from './travel/travel.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DpDatePickerModule } from 'ng2-date-picker';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    AboutPageComponent,
    LandingPageComponent,
    DemoDashboardComponent,
    MyOffersComponent,
    VerificationComponent,
    TravelComponent,
    AccommodationComponent,
    LogisticsComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    AgGridModule, 
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DpDatePickerModule 
  ],
  exports: [
    DemoDashboardComponent 
  ]
})
export class LandingModule { }
