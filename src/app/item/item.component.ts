import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Order, Product } from 'src/types';
import { ItemModalComponent } from '../item-modal/item-modal.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() item: Product;
  @Output() onChanged: EventEmitter<Order> = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openItem() {
    let dialogRef = this.dialog.open(ItemModalComponent, { data: this.item });

    dialogRef.afterClosed().subscribe((result: string | Order) => {
      if (result !== undefined && result !== 'cancel') {
        this.onChanged.emit(result as Order);
      }
    });
  }
}
