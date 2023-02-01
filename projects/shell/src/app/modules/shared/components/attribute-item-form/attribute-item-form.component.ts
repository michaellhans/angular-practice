import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-attribute-item-form',
  templateUrl: './attribute-item-form.component.html',
  styleUrls: ['./attribute-item-form.component.css']
})
export class AttributeItemFormComponent {
  @Input() name: string = '';
  @Input() value: string = '';
}
