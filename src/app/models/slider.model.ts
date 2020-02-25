import {SliderInterface} from '../interfaces/slider';

export class Slider implements SliderInterface {
    id: number;
    name: string;
    url: string;
    details: string;
    image: string;

    constructor(id: number, name: string, url: string, details: string, image: string) {
        this.id = id;
        this.name = name;
        this.url = url;
        this.details = details;
        this.image = image;
    }

}
