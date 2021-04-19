import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Option } from 'src/types';

@Component({
  selector: 'app-checkbox-option',
  templateUrl: './checkbox-option.component.html',
  styleUrls: ['./checkbox-option.component.scss'],
})
export class CheckboxOptionComponent implements OnInit {
  @Input() option: Option;

  @Output() itemChanged: EventEmitter<string[]> = new EventEmitter();

  count: number = 0;
  selected: { [key: string]: boolean } = {};

  constructor() {}

  ngOnInit(): void {
    this.option.choices.forEach(
      (option: string) => (this.selected[option] = false)
    );
  }

  onChange(option: string, changeEvent: MatCheckboxChange): void {
    if (changeEvent.checked) this.count++;
    else this.count--;

    this.selected[option] = changeEvent.checked;
    this.itemChanged.emit(this.getSelectedItemNames());
  }

  getSelectedItemNames(): string[] {
    const result = [];
    Object.keys(this.selected).forEach((key: string) => {
      if (this.selected[key]) result.push(key);
    });
    return result;
  }
}
