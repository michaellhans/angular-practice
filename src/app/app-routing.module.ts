import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/core/components/dashboard/dashboard.component';

const routes: Routes = [
  { 
    path: '',
    loadChildren: () => import('./modules/core/core.module').then(m => m.CoreModule)  
  },
  { 
    path: 'company-profile',
    loadChildren: () => import('./modules/company-profile/company-profile.module').then(m => m.CompanyProfileModule)
  },
  { 
    path: 'employment-detail',
    loadChildren: () => import('./modules/employment-detail/employment-detail.module').then(m => m.EmploymentDetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
