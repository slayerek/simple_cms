import {Component, OnInit, Input} from '@angular/core';
import {Product} from '../../../models/product.model';
import {CartService} from '../../../services/cart.service';

@Component({
    selector: 'app-product-list-item',
    templateUrl: './product-list-item.component.html',
    styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {

    @Input('product') product: Product;

    constructor(private cart: CartService) {}

    ngOnInit() {
    }

    public addToCart(product): void {
        this.cart.addItemToCart(product);
        this.updateProductsInCart();
    }

    private updateProductsInCart(): void {
        this.cart.cartItemsMessage.next(this.cart.getItemsFromCart());//update products in cart
        this.cart.cartItemsSum.next(this.cart.getProductsSum());//update products price
    }

}
