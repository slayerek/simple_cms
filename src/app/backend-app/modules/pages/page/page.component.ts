import {Component, OnInit} from '@angular/core';
import {Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
import {PagesService} from '../../../../services/pages.service';
import {HelpersService} from '../../../../services/helpers.service';
import {HttpClient} from '@angular/common/http';
import {Page} from '../../../../models/page.model';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

    public pageModel: Page;

    constructor(private router: Router, private pages: PagesService, private helpers: HelpersService, private http: HttpClient) {

        router.events.subscribe((event: Event) => {

            if (event instanceof NavigationStart) {
                // Show loading indicator
            }

            if (event instanceof NavigationEnd) {

                // Hide loading indicator
                const pageUrl = this.helpers.getLastElementOfUrl(event.url);

                this.pages.getPage(pageUrl).subscribe(
                    res => {
                        this.pageModel = res;
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

    ngOnInit() {


    }

}
