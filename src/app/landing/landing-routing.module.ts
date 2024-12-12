import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { DemoDashboardComponent } from './demo-dashboard/demo-dashboard.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { MyOffersComponent } from './my-offers/my-offers.component';
import { TravelComponent } from './travel/travel.component';
import { VerificationComponent } from './verification/verification.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'dashboard', component: DemoDashboardComponent},
  { path: 'my-offers', component: MyOffersComponent },
  { path: 'verification', component: VerificationComponent },
  { path: 'travel', component: TravelComponent },
  { path: 'accommodation', component: AccommodationComponent },
  { path: 'logistics', component: LogisticsComponent },
  { path : 'login', component:LoginComponent},
  { path : 'signup', component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
