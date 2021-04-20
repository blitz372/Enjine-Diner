import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { Option } from 'src/types';

@Component({
  selector: 'app-dropdown-options',
  templateUrl: './dropdown-options.component.html',
  styleUrls: ['./dropdown-options.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DropdownOptionsComponent,
      multi: true,
    },
  ],
})
export class DropdownOptionsComponent implements ControlValueAccessor {
  @Input() title: string = '';
  @Input() option: Option;

  value = '';
  onChange: (value: string) => void;
  onTouched: () => void;

  constructor() {}

  writeValue(obj: any): void {}

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  changeOption(changeEvent: MatSelectChange): void {
    this.value = changeEvent.value;
    this.onChange(this.value);
    this.onTouched();
  }
}
