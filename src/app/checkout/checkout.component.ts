import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Order } from 'src/types';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  @Input() orders: Order[];
  @Output() onSubmit: EventEmitter<null> = new EventEmitter();

  displayedColumns: string[] = ['quantity', 'order'];

  constructor() {}

  ngOnInit(): void {}

  submit() {
    this.onSubmit.emit();
  }

  optionType(element: any): string {
    return typeof element;
  }
}
