import {Component, OnInit} from '@angular/core';
import {PagesService} from '../../services/pages.service';
import {SlidersService} from '../../services/sliders.service';
import {Slider} from '../../models/slider.model';
import {Page} from '../../models/page.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public menuData: Page[];
    public slidesData: Slider[] = [];

    constructor(private pages: PagesService, private sliders: SlidersService) {}

    ngOnInit() {
        this.pages.getPages().subscribe(
            res => {
                this.menuData = this.getMenuItems(res);
            }
        )

        this.sliders.getSlides().subscribe(
            res => {
                this.slidesData = res;
            }
        );
    }

    private getMenuItems(arr, itemValue: number = 1, itemName: string = 'menu'): Page[] {

        const items = arr.filter((elem) => {
            return elem[itemName] == itemValue ? elem : '';
        });

        return items;

    }



}
