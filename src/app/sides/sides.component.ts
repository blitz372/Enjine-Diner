import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SideChange, Side } from 'src/types';

@Component({
  selector: 'app-sides',
  templateUrl: './sides.component.html',
  styleUrls: ['./sides.component.scss'],
})
export class SidesComponent implements OnInit {
  @Input() sides: Side[];

  @Output() onChanged: EventEmitter<SideChange> = new EventEmitter();

  selectedSide: string = '';
  sideModifier: string | number;
  modifierName: string;

  constructor() {}

  ngOnInit(): void {}

  selectSide(sideChangeEvent: SideChange) {
    const side = sideChangeEvent['side'];

    if (this.selectedSide === side) return;

    this.selectedSide = side;
    this.sideModifier = sideChangeEvent['sideModifier'];
    this.modifierName = sideChangeEvent['modifierName']
    this.onChanged.emit({
      side: this.selectedSide,
      sideModifier: this.sideModifier,
      modifierName: this.modifierName,
    });
  }

  updateChoice(choice: string | number) {
    this.sideModifier = choice;
    this.onChanged.emit({
      side: this.selectedSide,
      sideModifier: this.sideModifier,
      modifierName: this.modifierName,
    });
  }
}
