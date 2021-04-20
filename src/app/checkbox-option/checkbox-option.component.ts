import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Option } from 'src/types';

@Component({
  selector: 'app-checkbox-option',
  templateUrl: './checkbox-option.component.html',
  styleUrls: ['./checkbox-option.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CheckboxOptionComponent,
      multi: true,
    },
  ],
})
export class CheckboxOptionComponent implements OnInit, ControlValueAccessor {
  @Input() option: Option;

  count: number = 0;
  selected: { [key: string]: boolean } = {};
  value: string[] = [];

  onChange: (value: string[]) => void;
  onTouched: () => void;

  constructor() {}

  writeValue(obj: string[]): void {}

  registerOnChange(fn: (value: string[]) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {
    this.option.choices.forEach(
      (option: string) => (this.selected[option] = false)
    );
  }

  update(option: string, changeEvent: MatCheckboxChange): void {
    if (changeEvent.checked) this.count++;
    else this.count--;

    this.selected[option] = changeEvent.checked;
    this.value = this.getSelectedItemNames();
    this.onChange(this.value);
    this.onTouched();
  }

  getSelectedItemNames(): string[] {
    const result = [];
    Object.keys(this.selected).forEach((key: string) => {
      if (this.selected[key]) result.push(key);
    });
    return result;
  }
}
