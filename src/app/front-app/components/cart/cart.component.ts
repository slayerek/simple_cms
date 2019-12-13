import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';
import {Product} from '../../models/product.model';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

    public cartItems: Product[];
    public cartItemsSum: number = 0;

    constructor(private cart: CartService) {}

    ngOnInit() {
        this.cart.cartItemsMessage.subscribe(cartProds => {
            this.cartItems = this.cart.getItemsFromCart();
        });
        this.cart.cartItemsSum.subscribe(cartItemsSum => {
            this.cartItemsSum = cartItemsSum;
        });
    }

    public increaseItem(product: Product): void {
        this.cart.addItemToCart(product);
        this.updateProductsInCart();
    }

    public decreaseItem(product: Product): void {
        this.cart.removeItemFromCart(product, this.cartItems);
        this.updateProductsInCart();
    }

    public removeAllItemsFromCart(): void {
        this.cart.removeAllItemsFromCart();
        this.updateProductsInCart();
    }

    private updateProductsInCart(): void {
        this.cart.cartItemsMessage.next(this.cart.getItemsFromCart());//update products in cart
        this.cart.cartItemsSum.next(this.cart.getProductsSum());//update products price
    }

    public parseNumberToString(price: number, decimals: number = 2): string {
        return price.toFixed(decimals);
    }//use in view



}
