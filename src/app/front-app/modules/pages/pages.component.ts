import {Component, OnInit, ViewChild} from '@angular/core';
import {Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
import {PagesService} from '../../services/pages.service';
import {HelpersService} from '../../services/helpers.service';
import {Page} from '../../models/page.model';
import {Contact} from '../../models/contact.model';
import {HttpClient} from '@angular/common/http';



@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

    @ViewChild('f', {static: false}) form: any;
    public contactModel: Contact;
    public pageModel: Page;
    public messageSent: boolean = false;


    constructor(private router: Router, private pages: PagesService, private helpers: HelpersService, private http: HttpClient) {

        router.events.subscribe((event: Event) => {

            if (event instanceof NavigationStart) {
                // Show loading indicator
            }

            if (event instanceof NavigationEnd) {

                // Hide loading indicator
                const pageUrl = this.helpers.replaceString(event.url, '/', '');

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
        this.contactModel = new Contact();
    }

    onSubmit() {
        if (this.form.invalid !== true) {
            console.log(this.contactModel.name)
            console.log(this.contactModel.email)
            console.log(this.contactModel.description)

            //  const url = 'http://laravelapi.tescik.ovh/sendContactForm';
            //const url = 'http://localhost/sendContactForm';
            const url = 'http://cmsbackend.tescik.ovh:3000/sendContactForm';

            this.http.post(url, this.contactModel, {responseType: 'text'}).subscribe(
                req => {
                    console.log('req', req)
                }
            );

            this.form.reset();
            this.messageSent = true;
            setTimeout(() => {
                this.messageSent = false;
            }, 1000);
        }
    }








}
