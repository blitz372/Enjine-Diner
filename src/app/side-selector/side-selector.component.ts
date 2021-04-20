import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { Side, SideChange } from 'src/types';

@Component({
  selector: 'app-side-selector',
  templateUrl: './side-selector.component.html',
  styleUrls: ['./side-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SideSelectorComponent,
      multi: true,
    },
  ],
})
export class SideSelectorComponent implements OnInit, ControlValueAccessor {
  @Input() side: Side;
  @Input() checked: boolean = false;

  value: SideChange;

  onChange: (value: SideChange) => void;
  onTouched: () => void;

  constructor() {}

  ngOnInit(): void {
    this.value = {
      side: this.side.name,
      modifierName: this.side.modifierName,
      sideModifier: this.side.options ? this.side.options[0] : 1,
    };
  }

  writeValue(value: SideChange): void {}

  registerOnChange(fn: (value: SideChange) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  update(side: string): void {
    this.value.side = side;
    this.onChange(this.value);
    this.onTouched();
  }

  changeDropdown(changeEvent: MatSelectChange): void {
    this.value.sideModifier = changeEvent.value;
    this.onChange(this.value);
    this.onTouched();
  }

  changeInput(event: any) {
    this.value.sideModifier = Number(event.target.value);
    this.onChange(this.value);
    this.onTouched();
  }
}
