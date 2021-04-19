import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Option } from 'src/types';

@Component({
  selector: 'app-dropdown-options',
  templateUrl: './dropdown-options.component.html',
  styleUrls: ['./dropdown-options.component.scss'],
})
export class DropdownOptionsComponent implements OnInit {
  @Input() title: string = '';
  @Input() option: Option;

  @Output() itemChanged: EventEmitter<string> = new EventEmitter();

  selectedOption = '';

  constructor() {}

  ngOnInit(): void {}

  changeOption(changeEvent: MatSelectChange): void {
    this.selectedOption = changeEvent.value;
    this.itemChanged.emit(this.selectedOption);
  }
}
