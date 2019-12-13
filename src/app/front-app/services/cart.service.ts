import {Injectable} from '@angular/core';
import {Product} from '../models/product.model';
import {Cart} from '../interfaces/cart';
import {CookieService} from 'ngx-cookie-service';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CartService implements Cart {

    constructor(private cookie: CookieService) {}

    public cartItemsMessage = new BehaviorSubject([]);
    public cartItemsSum = new BehaviorSubject(this.getProductsSum());

    public addItemToCart(product: Product): void {

        let products = [];

        if (this.getItemsFromCart() != null) {

            products = products.concat(this.getItemsFromCart());

            const id = this.findInd(products, product);

            if (id > -1) {
                products[id]['quantity'] += 1;
                this.cookie.set('cartProducts', this.arrayToString(products), 2);
                return;
            }

        }

        product['quantity'] = 1;
        products.push(product);
        this.cookie.set('cartProducts', this.arrayToString(products), 2);

    }

    public removeItemFromCart(product: Product, products: Product[]): void {

        const id = this.findInd(products, product);

        if (id > -1) {
            if (products[id]['quantity'] > 1) {
                products[id]['quantity'] -= 1;
            } else {
                products.splice(id, 1);
            }
            this.cookie.set('cartProducts', this.arrayToString(products), 2);
        }

    }

    public removeAllItemsFromCart(): void {
        this.cookie.set('cartProducts', this.arrayToString([]), 2);
    }

    public getItemsFromCart(): Product[] {

        const products = this.cookie.get('cartProducts');

        if (products.length) {
            return this.stringToArray(products);
        }

        return [];
    }

    public getProductsSum(): number {

        const products = this.getItemsFromCart();
        let productsSum = 0;

        if (products != null) {

            for (let prod of products) {
                productsSum += prod.getProductSum();
            }

            return productsSum;

        }

        return 0;
    }

    private arrayToString(arr: Object[]): string {
        return JSON.stringify(arr);
    }

    private stringToArray(arr: string): Product[] {
        const prodArr = JSON.parse(arr).map(product => {
            return new Product(
                product.id,
                product.name,
                product.price,
                product.details,
                product.url,
                product.image,
                product.quantity
            );
        });

        return prodArr;
    }

    private findInd(arr: Product[], prod: Product): number {
        const id = arr.findIndex(item => {
            return prod.id == item.id;
        });
        return id;
    }

}
