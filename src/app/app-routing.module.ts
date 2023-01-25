import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/core/components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { 
    path: 'company-profile',
    loadChildren: () => import('./modules/company-profile/company-profile.module').then(m => m.CompanyProfileModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
