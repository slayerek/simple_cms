import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

    @Output() pageNumber = new EventEmitter<number>();
    @Input('numberOfPages') numberOfPages;

    constructor() {}

    ngOnInit() {}

    public choosePage(page: number) {
        this.pageNumber.emit(page);
    }


}
