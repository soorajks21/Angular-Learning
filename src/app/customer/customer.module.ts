import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { FilterComponent } from './customer-list/filter.component';


@NgModule({
  declarations: [
    CustomerComponent,
    CustomerListComponent,
    FilterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CustomerComponent]
})
export class CustomerModule { }
