import { Component, OnInit, Input } from '@angular/core';
import { Option } from 'src/types';

@Component({
  selector: 'app-radio-option',
  templateUrl: './radio-option.component.html',
  styleUrls: ['./radio-option.component.scss']
})
export class RadioOptionComponent implements OnInit {
  @Input() title: string = "";
  @Input() option: Option;

  selectedChoice = "";

  constructor() { }

  ngOnInit(): void {
  }

  clickRadio(choice) {
    this.selectedChoice = choice;
  }
}
