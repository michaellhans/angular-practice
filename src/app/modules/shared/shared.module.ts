import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeItemComponent } from './components/attribute-item/attribute-item.component';
import { MessagesComponent } from './components/messages/messages.component';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ContainerComponent } from './components/container/container.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [AttributeItemComponent, MessagesComponent, TopBarComponent, ContainerComponent, ContainerComponent],
  imports: [
    CommonModule, RouterModule, MatListModule
  ],
  exports: [ RouterModule, CommonModule, MatListModule, AttributeItemComponent, MessagesComponent, TopBarComponent, ContainerComponent ]
})
export class SharedModule { }
