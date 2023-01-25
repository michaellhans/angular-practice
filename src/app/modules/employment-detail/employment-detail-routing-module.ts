import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmploymentDetailComponent } from './employment-detail.component';

const routes: Routes = [
  {
    path: '',
    component: EmploymentDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmploymentDetailRoutingModule { }
