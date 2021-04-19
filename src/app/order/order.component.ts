import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Order, Product } from 'src/types';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  @Output() onChanged: EventEmitter<Order[]> = new EventEmitter();

  items: Product[] = [
    {
      name: 'Hamubrger',
      image:
        'https://image.similarpng.com/thumbnail/2020/04/Floating-burger-PNG.png',
      description:
        'Bite into a nice juicy, fresh-cooked burger! Comes with your choice of fries or salad.',
      option: {
        name: 'Condiments',
        limit: 4,
        choices: ['Ketchup', 'Mustard', 'Lettuce', 'Tomatoes'],
      },

      sides: [
        {
          name: 'Salad',
          modifierName: 'Dressing',
          options: ['Caesar', 'Balsamic'],
        },
        {
          name: 'Fries',
          modifierName: 'Size',
          options: ['Small', 'Large'],
        },
      ],
    },
    {
      name: 'Steak',
      image:
        'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2007/1/2/0/valentines_steak.jpg.rend.hgtvcom.616.462.suffix/1557859049553.jpeg',
      description: 'Lorem ipsum dolor sit amet',
      option: {
        name: 'Doneness',
        limit: 1,
        choices: ['Rare', 'Medium', 'Well Done'],
      },
      sides: [
        {
          name: 'Salad',
          modifierName: 'Dressing',
          options: ['Caesar', 'Balsamic'],
        },
        {
          name: 'Baked Potato',
          modifierName: 'Quantity',
          options: null,
        },
      ],
    },
  ];
  orders: Order[] = [];

  constructor() {}

  ngOnInit(): void {}

  addOrder(order: Order) {
    this.orders.push(order);
    this.onChanged.emit(this.orders);
  }
}
