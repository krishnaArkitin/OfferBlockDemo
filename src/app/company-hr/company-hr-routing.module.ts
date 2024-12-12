import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';

const routes: Routes = [
  {path:'', redirectTo:'company-hr',pathMatch:'full'},
  {path:'company-hr', component:HrDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyHrRoutingModule { }
