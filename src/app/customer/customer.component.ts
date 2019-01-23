import {Component, OnInit} from '@angular/core';
import { ICustomer } from '../shared/interfaces';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html'

})

export class CustomerComponent implements OnInit {

    title: string;
    people: ICustomer[];
    isVisible = true;
    changeVisibility() {
    this.isVisible = !this.isVisible;
    }
    ngOnInit() {
        this.title = 'Customer';
        this.people = [
            {id : 1, name: 'sooraj', city: 'Thrissur', orderTotal: 9.99, customerSince: new Date
                (2014, 6, 22)},
            {id : 2, name: 'subin', city: 'Kottayam', orderTotal: 19.99, customerSince: new Date
            (2013, 6, 20)},
            {id : 3, name: 'nithin', city: 'Kottayam', orderTotal: 10.99, customerSince: new Date
            (2016, 6, 21)},
            {id : 4, name: 'gautham', city: 'Thiruvanthapuram', orderTotal: 15.99, customerSince: new Date
            (2018, 6, 7)}
        ];
    }
}
