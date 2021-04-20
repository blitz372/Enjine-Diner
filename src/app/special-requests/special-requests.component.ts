import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-special-requests',
  templateUrl: './special-requests.component.html',
  styleUrls: ['./special-requests.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class SpecialRequestsComponent {
  @Input() controlName: string;

  constructor() {}
}
