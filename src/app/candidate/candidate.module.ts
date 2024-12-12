import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateRoutingModule } from './candidate-routing.module';
import { CandidateDashboardComponent } from './candidate-dashboard/candidate-dashboard.component';
import { VerificationComponent } from './verification/verification.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { TravelComponent } from './travel/travel.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { MyOffersComponent } from './my-offers/my-offers.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CandidateDashboardComponent,
    VerificationComponent,
    AccommodationComponent,
    TravelComponent,
    LogisticsComponent,
    MyOffersComponent
  ],
  imports: [
    CommonModule,
    CandidateRoutingModule,
    FormsModule,
  ]
})
export class CandidateModule { }
