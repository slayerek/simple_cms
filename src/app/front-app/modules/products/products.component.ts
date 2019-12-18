import {Component, OnInit} from '@angular/core';
import {Product} from '../../models/product.model';
import {ProductsService} from '../../services/products.service';
import {environment} from '../../../../environments/environment';
import {CartService} from '../../services/cart.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    public productsView: Product[];
    public numberOfPages: number[];
    private configProducstNumber: number = environment.productsNumber;
    public cartItems: Product[];
    public cartItemsSum: number = 0;

    constructor(
        private productsSerivce: ProductsService,
        private cart: CartService
    ) {}

    ngOnInit() {

        this.productsSerivce.getProducts().subscribe(
            products => {
                this.numberOfPages = this.getNumberOfPages(products);
            }
        );//first load - get number of products pages - need that to pagination

        this.updatePaginatedProducts(0);//set products at firts load - need that to pagination

        this.productsSerivce.productsData.subscribe(
            products => {
                this.productsView = products;
            }
        );//update products when someone click pagination button number

        this.cart.cartItemsMessage.subscribe(cartProds => {
            this.cartItems = this.cart.getItemsFromCart();
        });
        this.cart.cartItemsSum.subscribe(cartItemsSum => {
            this.cartItemsSum = cartItemsSum;
        });

    }

    public choosePage(pageNumber: number): void {
        this.updatePaginatedProducts(pageNumber);
    }

    private getNumberOfPages(products: Product[]): number[] {
        return new Array(Math.ceil(products.length / this.configProducstNumber));
    }//generate and get number of pages - need that to pagination

    private updatePaginatedProducts(page: number): void {
        this.productsSerivce.getProducts().subscribe(products => {
            const productsNewArr = products.slice(page * this.configProducstNumber, this.configProducstNumber + (page * this.configProducstNumber));
            this.productsSerivce.productsData.next(productsNewArr);
        });
    }


    /*cart section*/

    public removeAllItemsFromCart(remove: boolean): void {

        if (remove) {
            this.cart.removeAllItemsFromCart();
            this.updateProductsInCart();
        }
    }

    public increaseDecreaseItem(item): void {

        switch (item['actionType']) {
            case 'add':
                this.cart.addItemToCart(item['product']);
                break;
            case 'remove':
                this.cart.removeItemFromCart(item['product']);
                break;
        }

        this.updateProductsInCart();

    }

    private updateProductsInCart(): void {
        this.cart.cartItemsMessage.next(this.cart.getItemsFromCart());//update products in cart
        this.cart.cartItemsSum.next(this.cart.getProductsSum());//update products price
    }



}
