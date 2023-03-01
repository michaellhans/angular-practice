import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeItemComponent } from './components/attribute-item/attribute-item.component';
import { MessagesComponent } from './components/messages/messages.component';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ContainerComponent } from './components/container/container.component';
import { MatListModule } from '@angular/material/list';
import { AttributeItemFormComponent } from './components/attribute-item-form/attribute-item-form.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [AttributeItemComponent, AttributeItemFormComponent, MessagesComponent, TopBarComponent, ContainerComponent],
  imports: [
    CommonModule, RouterModule, MatListModule, FormsModule, ReactiveFormsModule, PopoverModule
  ],
  exports: [ PopoverModule, RouterModule, CommonModule, MatListModule, FormsModule, ReactiveFormsModule, AttributeItemComponent, AttributeItemFormComponent, MessagesComponent, TopBarComponent, ContainerComponent ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [MessageService]
    };
  }
}
