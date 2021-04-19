import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Option, Order, OrderOption, Product, SideChange } from 'src/types';

@Component({
  selector: 'app-item-modal',
  templateUrl: './item-modal.component.html',
  styleUrls: ['./item-modal.component.scss'],
})
export class ItemModalComponent implements OnInit {
  @Output() onChanged: EventEmitter<Order> = new EventEmitter();

  order: Order = {
    product: '',
    quantity: 1,
    requests: '',
    side: null,
    option: null,
  };

  constructor(@Inject(MAT_DIALOG_DATA) public item: Product) {}

  ngOnInit(): void {
    this.order.product = this.item.name;
  }

  updateQuantity(quantity: number): void {
    this.order.quantity = quantity;
  }

  updateSide(side: SideChange): void {
    this.order.side = side;
  }

  updateOptions(choices: string[]): void {
    if (!this.order.option) {
      this.order.option = { name: this.item.option.name, selected: choices };
    }
    this.order.option.selected = choices;
  }

  updateRequests(requests: string): void {
    this.order.requests = requests;
  }

  isOrderValid(): boolean {
    return (
      !!this.order.product &&
      !!this.order.side &&
      (!!this.order.option || this.item.option.limit > 1)
    );
  }

  submitOrder(): void {
    this.onChanged.emit(this.order);
  }
}
