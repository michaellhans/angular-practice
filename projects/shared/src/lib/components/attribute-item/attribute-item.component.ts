import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-item',
  templateUrl: './attribute-item.component.html',
  styleUrls: ['./attribute-item.component.css']
})
export class AttributeItemComponent {
  @Input() name: string = '';
  @Input() value: string = '';

}
