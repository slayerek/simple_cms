import {Component, OnInit} from '@angular/core';
import {PagesService} from '../../../services/pages.service';
import {SortableService} from '../../../services/sortable.service';
import {HelpersService} from '../../../services/helpers.service';
import {Page} from '../../../models/page.model';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

    public moduleName: string = 'Strony';
    public pagesView: Page[] = [];

    constructor(private pages: PagesService, private sort: SortableService, private help: HelpersService) {}

    ngOnInit() {

        this.pages.getPages().subscribe(
            res => {
                this.pagesView = this.help.sortItems(res);
            }
        );

    }

    updateSortingList($event) {
        var dir = $event;
        this.help.sortItems(this.pagesView, dir);
    }




}
