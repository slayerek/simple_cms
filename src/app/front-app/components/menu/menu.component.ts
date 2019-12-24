import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    public siteName: string = 'Simple CMS';

    constructor() {}

    ngOnInit() {
    }

}
