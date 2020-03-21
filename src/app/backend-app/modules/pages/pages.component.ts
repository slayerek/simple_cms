import {Component, OnInit} from '@angular/core';
import {PagesService} from '../../../services/pages.service';
import {SortableService} from '../../../services/sortable.service';
import {Page} from '../../../models/page.model';
import {SortablejsOptions} from 'ngx-sortablejs';


@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

    public moduleName: string = 'Strony';
    private moduleTableName: string = 'modules';
    public pagesView: Page[] = [];
    public sortArr: [] = [];

    options: SortablejsOptions = {
        handle: '.sortItem',
        dataIdAttr: 'data-id',
        // Element dragging ended
        onEnd: function (evt) {

            const oldIndex = evt.oldIndex;
            const newIndex = evt.newIndex;
            const arr = [...evt.target['rows']];
            const newItemsOrder = [];
            let id = 0;
            let that = this;

            let n = 0;
            while (n < arr.length) {
                id = parseInt(arr[n]['dataset']['id']);
                newItemsOrder.push({[id]: n});
                n++;
            }

            that.sort.updateSortItems(newItemsOrder);//send new sort order

        }.bind(this)
    };

    constructor(private pages: PagesService, private sort: SortableService) {}

    ngOnInit() {

        this.pages.getPages().subscribe(
            res => {
                this.pagesView = res;
            }
        );



        // this.sort.updateSortItems('www').subscribe(
        //     res => {res}
        // )


    }

}
