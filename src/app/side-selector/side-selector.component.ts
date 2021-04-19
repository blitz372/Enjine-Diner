import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Side, SideChange } from 'src/types';

@Component({
  selector: 'app-side-selector',
  templateUrl: './side-selector.component.html',
  styleUrls: ['./side-selector.component.scss'],
})
export class SideSelectorComponent implements OnInit {
  @Input() side: Side;
  @Input() checked: boolean = false;

  @Output() onChanged: EventEmitter<string | number> = new EventEmitter();
  @Output() changeSide: EventEmitter<SideChange> = new EventEmitter();

  selectedChoice: string | number = '';

  constructor() {}

  ngOnInit(): void {
    this.selectedChoice = this.side.options? this.side.options[0] : 1;
  }

  update(name: string): void {
    this.changeSide.emit({ side: name, sideModifier: this.selectedChoice, modifierName: this.side.modifierName });
  }

  changeDropdown(changeEvent: MatSelectChange): void {
    this.onChanged.emit(changeEvent.value);
  }

  changeInput(event: any) {
    this.onChanged.emit(Number(event.target.value))
  }
}
