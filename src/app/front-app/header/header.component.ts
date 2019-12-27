import {Component, OnInit} from '@angular/core';
import {PagesService} from '../services/pages.service';
import {Page} from '../models/page.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public menuData: Page[];

    constructor(private pages: PagesService) {}

    ngOnInit() {
        this.pages.getPages().subscribe(
            res => {
                this.menuData = this.getMenuItems(res);
            }
        )
    }

    public getMenuItems(arr, itemValue: number = 1, itemName: string = 'menu'): Page[] {

        const items = arr.filter((elem) => {
            return elem[itemName] == itemValue ? elem : '';
        });

        return items;

    }

}
