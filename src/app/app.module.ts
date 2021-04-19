import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTable, MatTableModule } from '@angular/material/table';

import { ItemModalComponent } from './item-modal/item-modal.component';
import { OrderComponent } from './order/order.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ItemComponent } from './item/item.component';
import { RadioOptionComponent } from './radio-option/radio-option.component';
import { CheckboxOptionComponent } from './checkbox-option/checkbox-option.component';
import { SidesComponent } from './sides/sides.component';
import { SideSelectorComponent } from './side-selector/side-selector.component';
import { DropdownOptionsComponent } from './dropdown-options/dropdown-options.component';
import { SpecialRequestsComponent } from './special-requests/special-requests.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    CheckoutComponent,
    ItemComponent,
    ItemModalComponent,
    RadioOptionComponent,
    CheckboxOptionComponent,
    SidesComponent,
    SideSelectorComponent,
    DropdownOptionsComponent,
    SpecialRequestsComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    FormsModule,
    MatCheckboxModule,
    MatDialogModule,
    MatRadioModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
