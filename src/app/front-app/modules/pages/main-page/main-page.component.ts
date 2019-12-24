import {Component, OnInit} from '@angular/core';
import {Page} from '../../../models/page.model';
import {PagesService} from '../../../services/pages.service';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

    public mainPageView: Page;

    constructor(private pages: PagesService) {}

    ngOnInit() {

        this.pages.getPage('', 1).subscribe(
            res => {
                this.mainPageView = res;
            }
        )

    }

}
