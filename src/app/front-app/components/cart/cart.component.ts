import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent {

    @Output() cartItemsOutput = new EventEmitter<Object>();
    @Output() removeAllItemsFromCartOutput = new EventEmitter<boolean>();
    @Input('cartItemsInput') cartItemsInput;

    constructor() {}

    public increaseDecreaseItem(product: Object, actionType: string) {
        this.cartItemsOutput.emit({product: product, actionType: actionType});
    }

    public removeAllItemsFromCart(): void {
        this.removeAllItemsFromCartOutput.emit(true);
    }

    public parseNumberToString(price: number, decimals: number = 2): string {
        return price.toFixed(decimals);
    }//use in view



}
