import {Component, OnInit, Input} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    @Input('menuData') menuData;
    @Input('menuClass') menuClass;

    public siteName: string = 'Simple CMS';
    public hideSearch: boolean;

    constructor() {}

    ngOnInit() {

        this.hideSearch = environment.hideSearch;

    }



}
