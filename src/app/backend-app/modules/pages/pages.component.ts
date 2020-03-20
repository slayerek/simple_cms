import {Component, OnInit} from '@angular/core';
import {PagesService} from '../../../services/pages.service';
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

    options: SortablejsOptions = {
        handle: '.sortItem',
        dataIdAttr: 'data-id',
        // Element dragging ended
        onEnd: function (evt) {

            //const newInd = ;
            const oldIndex = evt.oldIndex;
            const newIndex = evt.newIndex;
            const arr = [...evt.target['rows']];
            const newItemsOrder = [];
            let id = 0;

            let n = 0;
            while (n < arr.length) {
                id = parseInt(arr[n]['dataset']['id']);
                newItemsOrder.push({[id]: n});
                n++;
            }
            console.log(newItemsOrder)
            //console.log('new', evt.newIndex)
            //console.log('old', evt.oldIndex)
        }
    };

    constructor(private pages: PagesService) {}

    ngOnInit() {

        this.pages.getPages().subscribe(
            res => {
                this.pagesView = res;
            }
        );

    }

}
