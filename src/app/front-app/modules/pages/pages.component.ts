import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PagesService} from '../../services/pages.service';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

    private pageUrl: string;

    constructor(private route: ActivatedRoute, private pages: PagesService) {

        route.params.subscribe(res => {
            this.pageUrl = res['id'];
        }
        )

    }

    ngOnInit() {
        if (this.pageUrl != '') {
            this.pages.getPage(this.pageUrl).subscribe(
                res => {
                    //console.log(res)
                }
            );
        }
    }

}
