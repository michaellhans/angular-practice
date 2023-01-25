import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeItemComponent } from './components/attribute-item/attribute-item.component';
import { MessagesComponent } from './components/messages/messages.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AttributeItemComponent, MessagesComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [ RouterModule, CommonModule, AttributeItemComponent, MessagesComponent ]
})
export class SharedModule { }
