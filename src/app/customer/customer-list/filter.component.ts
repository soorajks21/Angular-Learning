import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-filter-textbox',
    template: `
        Filter: <input type="text" />
    `
})

export class FilterComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
