import {Component, OnInit, Input} from '@angular/core';



@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

    @Input('slidesData') slidesData;
    @Input('id') id;
    @Input('stopSlideCarousel') stopSlideCarousel;//if You want turn off slider, set false in parent component html template, otherwise leave empty value

    constructor() {}

    ngOnInit() {
    }

}
