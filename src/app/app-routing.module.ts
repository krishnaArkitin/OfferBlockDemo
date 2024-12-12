import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './landing/login/login.component';
import { SignupComponent } from './landing/signup/signup.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  { 
    path: 'candidate', 
    loadChildren: () => import('./candidate/candidate.module').then(m => m.CandidateModule),
    canActivate: [authGuard],
    data: { role: 'candidate' }
  },
  { 
    path: 'company', 
    loadChildren: () => import('./company/company.module').then(m => m.CompanyModule),
    canActivate: [authGuard],
    data: { role: 'company' }
  },
  { 
    path: 'company-hr', 
    loadChildren: () => import('./company-hr/company-hr.module').then(m => m.CompanyHrModule),
    canActivate: [authGuard],
    data: { role: 'company-hr' }
  },
  { 
    path: 'police', 
    loadChildren: () => import('./police/police.module').then(m => m.PoliceModule),
    canActivate: [authGuard],
    data: { role: 'police' }
  },
  { 
    path: 'institute', 
    loadChildren: () => import('./institute/institute.module').then(m => m.InstituteModule),
    canActivate: [authGuard],
    data: { role: 'institute' }
  },
  { path: '**', redirectTo: '/landing' }  // Wildcard route
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
