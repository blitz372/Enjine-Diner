import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Option, Order, OrderOption, Product, SideChange } from 'src/types';

@Component({
  selector: 'app-item-modal',
  templateUrl: './item-modal.component.html',
  styleUrls: ['./item-modal.component.scss'],
})
export class ItemModalComponent implements OnInit {
  @Output() submit: EventEmitter<Order> = new EventEmitter();

  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public item: Product,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    const side = this.item.sides[0];
    this.form = this.fb.group({
      itemName: new FormControl(this.item.name, [Validators.required]),
      options: new FormControl(null, [this.optionsValidator.bind(this)]),
      optionsName: new FormControl(this.item.option.name, [
        Validators.required,
      ]),
      side: new FormControl(null, [
        Validators.required,
        this.sideQuantityValidator(1),
      ]),
      requests: new FormControl(''),
      quantity: new FormControl(1, [Validators.required, Validators.min(1)]),
    });
  }

  sideQuantityValidator(min: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      let valid =
        control.value === null ||
        typeof control.value.sideModifier === 'string' ||
        control.value.sideModifier >= min;
      return valid ? null : { sideQuantity: { value: control.value } };
    };
  }

  optionsValidator(control: AbstractControl): { [key: string]: any } | null {
    // Valid if array (checkbox) or if string (dropdown)
    let valid =
      (typeof control.value === 'object' && this.item.option.limit > 1) ||
      (this.item.option.limit === 1 &&
        typeof control.value === 'string' &&
        control.value !== '');
    return valid ? null : { options: { value: control.value } };
  }
}
