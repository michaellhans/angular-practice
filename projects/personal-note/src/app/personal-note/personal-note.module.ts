import { NgModule } from '@angular/core';
import { PersonalNoteComponent } from './personal-note.component';
import { SharedModule } from 'shared/shared.module';
import { PersonalNoteRoutingModule } from './personal-note-routing-module';
import { QuillModule } from 'ngx-quill'

@NgModule({
  declarations: [
    PersonalNoteComponent
  ],
  imports: [
    SharedModule,
    PersonalNoteRoutingModule,
    QuillModule.forRoot()
  ],
  providers: []
})
export class PersonalNoteModule { }
