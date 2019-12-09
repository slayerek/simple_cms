import {ProductInterface} from '../interfaces/product';
import {environment} from '../../../environments/environment';

export class Product implements ProductInterface {

    id: number;
    name: string;
    price: number;
    details: string;
    url: string;
    image: string;
    quantity: number

    constructor(id: number, name: string, price: number, details: string, url: string, image: string, quantity?: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.details = details;
        this.url = url;
        this.image = image;
        this.quantity = quantity;
    }

    public getProductPrice() {

        const discountCode = environment.discountCode;

        return this.price - (this.price * discountCode);

    }

    public getProductSum() {

        const discountCode = environment.discountCode;

        return (this.price - (this.price * discountCode)) * this.quantity;

    }

}
