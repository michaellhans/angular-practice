import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeItemComponent } from './components/attribute-item/attribute-item.component';
import { MessagesComponent } from './components/messages/messages.component';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './components/top-bar/top-bar.component';

@NgModule({
  declarations: [AttributeItemComponent, MessagesComponent, TopBarComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [ RouterModule, CommonModule, AttributeItemComponent, MessagesComponent, TopBarComponent ]
})
export class SharedModule { }
