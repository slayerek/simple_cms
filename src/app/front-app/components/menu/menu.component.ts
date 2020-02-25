import {Component, OnInit, Input} from '@angular/core';
import {HelpersService} from '../../../services/helpers.service';
import {Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    @Input('menuData') menuData;
    @Input('menuClass') menuClass;
    @Input('siteName') siteName;
    @Input('hideSearch') hideSearch;

    public activeUrl: string;

    constructor(private helpers: HelpersService, private router: Router) {}

    ngOnInit() {

        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationStart) {
                // Show loading indicator
            }

            if (event instanceof NavigationEnd) {
                // Hide loading indicator
                this.activeUrl = this.helpers.replaceString(event.url, '/', '');
            }

            if (event instanceof NavigationError) {
                // Hide loading indicator
                // Present error to user
                console.log(event.error);
            }
        });

    }

}
