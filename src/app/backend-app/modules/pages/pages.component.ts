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
    public pagesView: Page[] = [];

    options: SortablejsOptions = {
        handle: '.sortItem',
        // Element dragging ended
        onEnd: function (evt) {
            console.log('evt', evt)
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
