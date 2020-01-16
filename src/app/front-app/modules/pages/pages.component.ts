import {Component, OnInit} from '@angular/core';
import {Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
import {PagesService} from '../../services/pages.service';
import {HelpersService} from '../../services/helpers.service';
import {Page} from '../../models/page.model';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

    public pageView: Page;

    constructor(private router: Router, private pages: PagesService, private helpers: HelpersService) {

        router.events.subscribe((event: Event) => {

            if (event instanceof NavigationStart) {
                // Show loading indicator
            }

            if (event instanceof NavigationEnd) {

                // Hide loading indicator
                const pageUrl = this.helpers.replaceString(event.url, '/', '');

                this.pages.getPage(pageUrl).subscribe(
                    res => {
                        this.pageView = res;
                    }
                );

            }

            if (event instanceof NavigationError) {
                // Hide loading indicator
                // Present error to user
                console.log(event.error);
            }
        });

    }

}
