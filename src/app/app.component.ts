import { Component } from '@angular/core';
import { Order } from 'src/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'enjine-diner';
  view = 'order';
  orders: Order[] = [];

  updateView(view: string) {
    this.view = view;
  }

  addOrder(order: Order) {
    this.orders.push(order);
  }

  submit() {
    this.orders = null;
    this.view = 'order';
  }
}
