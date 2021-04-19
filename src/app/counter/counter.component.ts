import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  @Input() count: number = 1;
  @Input() min: number;
  @Input() max: number;

  @Output() onChanged: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  increment() {
    if (this.max !== null && this.count === this.max) return;
    this.count++;
    this.onChanged.emit(this.count);
  }

  decrement() {
    if (this.min !== null && this.count === this.min) return;
    this.count--;
    this.onChanged.emit(this.count);
  }
}
