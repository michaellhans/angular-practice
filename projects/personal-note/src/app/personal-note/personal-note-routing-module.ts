import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalNoteComponent } from './personal-note.component';

const routes: Routes = [
  {
    path: '',
    component: PersonalNoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalNoteRoutingModule { }
