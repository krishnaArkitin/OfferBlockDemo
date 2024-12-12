import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyHrRoutingModule } from './company-hr-routing.module';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';


@NgModule({
  declarations: [
    HrDashboardComponent
  ],
  imports: [
    CommonModule,
    CompanyHrRoutingModule
  ]
})
export class CompanyHrModule { }
