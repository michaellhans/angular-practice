import { NgModule } from '@angular/core';
import { ProfileItemComponent } from './components/profile-item/profile-item.component';

@NgModule({
  declarations: [
    ProfileItemComponent
  ],
  exports: [ ProfileItemComponent ]
})
export class SharedModule { }
