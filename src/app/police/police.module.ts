import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliceRoutingModule } from './police-routing.module';
import { PoliceDashboardComponent } from './police-dashboard/police-dashboard.component';


@NgModule({
  declarations: [
    PoliceDashboardComponent
  ],
  imports: [
    CommonModule,
    PoliceRoutingModule
  ]
})
export class PoliceModule { }
