import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { IssueOffersComponent } from './issue-offers/issue-offers.component';
import { IssuedOffersComponent } from './issued-offers/issued-offers.component';
import { ProjectsComponent } from './projects/projects.component';
import { RecruitersComponent } from './recruiters/recruiters.component';
import { AgGridModule } from 'ag-grid-angular';
import { CandidateProfileComponent } from './candidate-profile/candidate-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CompanyDashboardComponent,
    IssueOffersComponent,
    IssuedOffersComponent,
    ProjectsComponent,
    RecruitersComponent,
    CandidateProfileComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    AgGridModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CompanyModule { }
