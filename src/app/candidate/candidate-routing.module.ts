import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateDashboardComponent } from './candidate-dashboard/candidate-dashboard.component';
import { VerificationComponent } from './verification/verification.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { TravelComponent } from './travel/travel.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { MyOffersComponent } from '../landing/my-offers/my-offers.component';

const routes: Routes = [
  {path:'', redirectTo:'candidatedashboard', pathMatch:'full'},
  {path:'candidatedashboard', component:CandidateDashboardComponent},
  {path:'my-offers',component:MyOffersComponent},
  {path:'verfication',component:VerificationComponent},
  {path:'accommodation',component:AccommodationComponent},
  {path:'travel',component:TravelComponent},
  {path:'logistics',component:LogisticsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule { }
