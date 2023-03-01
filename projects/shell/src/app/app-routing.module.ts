import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)  
  },
  { 
    path: 'company-profile',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      remoteName: 'companyProfile',
      exposedModule: './Module'      // exposed module, following the remote webpack.config.js
    }).then(m => m.CompanyProfileModule) // the module that wanted to be used
  },
  { 
    path: 'employment-detail',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      remoteName: 'employmentDetail',
      exposedModule: './Module'
    }).then(m => m.EmploymentDetailModule)
  },
  { 
    path: 'personal-detail',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:4203/remoteEntry.js',
      remoteName: 'personalDetail',
      exposedModule: './Module'
    }).then(m => m.PersonalDetailModule)
  },
  { 
    path: 'personal-note',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:4204/remoteEntry.js',
      remoteName: 'personalNote',
      exposedModule: './Module'
    }).then(m => m.PersonalNoteModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
