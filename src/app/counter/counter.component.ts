import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CounterComponent,
      multi: true,
    },
  ],
})
export class CounterComponent implements ControlValueAccessor {
  @Input() value: number;
  @Input() min: number;
  @Input() max: number;

  onChange: (value: number) => void;
  onTouched: () => void;

  constructor() {}

  writeValue(value: number): void {
    this.value = value;
  }

  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  increment() {
    if (this.max !== null && this.value === this.max) return;
    this.value++;
    this.onChange(this.value);
    this.onTouched();
  }

  decrement() {
    if (this.min !== null && this.value === this.min) return;
    this.value--;
    this.onChange(this.value);
    this.onTouched();
  }
}
