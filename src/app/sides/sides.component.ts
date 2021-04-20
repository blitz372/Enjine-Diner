import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  ControlContainer,
  FormGroupDirective,
} from '@angular/forms';
import { SideChange, Side } from 'src/types';

@Component({
  selector: 'app-sides',
  templateUrl: './sides.component.html',
  styleUrls: ['./sides.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class SidesComponent {
  @Input() sides: Side[];
  @Input() controlName: string;

  selected: string;

  constructor() {}

  selectSide(side: string) {
    this.selected = side;
  }
}
