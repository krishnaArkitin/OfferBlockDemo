import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstituteRoutingModule } from './institute-routing.module';
import { InstituteDashboardComponent } from './institute-dashboard/institute-dashboard.component';


@NgModule({
  declarations: [
    InstituteDashboardComponent
  ],
  imports: [
    CommonModule,
    InstituteRoutingModule
  ]
})
export class InstituteModule { }
