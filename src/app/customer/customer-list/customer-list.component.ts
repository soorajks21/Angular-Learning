import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'app-customer-list',
    templateUrl: './customer-list.component.html'

})

export class CustomerListComponent implements OnInit {
    filteredCustomers: any[] = [];
    CustomersOrderTotal: number;
    currencyCode: String = 'USD';

    constructor() {}
    ngOnInit() {}
}
