import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateDashboardComponent } from '../candidate/candidate-dashboard/candidate-dashboard.component';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { IssueOffersComponent } from './issue-offers/issue-offers.component';
import { IssuedOffersComponent } from './issued-offers/issued-offers.component';
import { ProjectsComponent } from './projects/projects.component';
import { RecruitersComponent } from './recruiters/recruiters.component';
import { CandidateProfileComponent } from './candidate-profile/candidate-profile.component';

const routes: Routes = [
  {path:'',redirectTo:'companydashboard',pathMatch:'full'},
  {path:'companydashboard', component:CompanyDashboardComponent},
  {path:'issueoffers', component:IssueOffersComponent},
  {path:'issuedoffers',component:IssuedOffersComponent},
  {path:'project', component:ProjectsComponent},
  {path:'recruiter', component:RecruitersComponent},
  {path:'candidateProfile/:offerBlockId', component:CandidateProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
