export interface Cart {

    addItemToCart(item): void,

    removeItemFromCart(item, items): void,

    removeAllItemsFromCart(): void,

    getItemsFromCart(): Object[],

    getProductsSum(): number
}

