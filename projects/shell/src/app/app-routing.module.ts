import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    loadChildren: () => import('./modules/core/core.module').then(m => m.CoreModule)  
  },
  { 
    path: 'company-profile',
    loadChildren: () => loadRemoteModule({
      type: 'manifest',
      remoteName: 'company-profile',
      exposedModule: './Module'
    }).then(m => m.CompanyProfileModule)
  },
  { 
    path: 'employment-detail',
    loadChildren: () => loadRemoteModule({
      type: 'manifest',
      remoteName: 'employment-detail',
      exposedModule: './Module'
    }).then(m => m.EmploymentDetailModule)
  },
  { 
    path: 'personal-detail',
    loadChildren: () => loadRemoteModule({
      type: 'manifest',
      remoteName: 'personal-detail',
      exposedModule: './Module'
    }).then(m => m.PersonalDetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
