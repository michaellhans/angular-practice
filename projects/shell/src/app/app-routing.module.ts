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
      remoteName: 'company-profile', // remote app name
      exposedModule: './Module'      // exposed module, following the remote webpack.config.js
    }).then(m => m.CompanyProfileModule) // the module that wanted to be used
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
  },
  { 
    path: 'personal-note',
    loadChildren: () => loadRemoteModule({
      type: 'manifest',
      remoteName: 'personal-note',
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
