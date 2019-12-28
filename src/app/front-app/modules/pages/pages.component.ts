import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
import {PagesService} from '../../services/pages.service';
import {HelpersService} from '../../services/helpers.service';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

    constructor(private router: Router, private pages: PagesService, private helpers: HelpersService) {}

    ngOnInit() {

        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationStart) {
                // Show loading indicator
            }

            if (event instanceof NavigationEnd) {
                // Hide loading indicator
                const pageUrl = this.helpers.replaceString(event.url, '/', '');

                this.pages.getPage(pageUrl).subscribe(
                    res => {
                        console.log(res)
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
