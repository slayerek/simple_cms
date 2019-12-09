import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {ProductsComponent} from './products.component';
import {ProductNotFoundComponent} from './product-not-found/product-not-found.component';
import {ProductItemComponent} from './product-item/product-item.component';
import {PaginationComponent} from '../../components/pagination/pagination.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductListItemComponent} from './product-list-item/product-list-item.component';
import {CartComponent} from '../../components/cart/cart.component';

@NgModule({
    declarations: [
        ProductsComponent,
        ProductNotFoundComponent,
        ProductItemComponent,
        PaginationComponent,
        ProductListComponent,
        ProductListItemComponent,
        CartComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule
    ]
})
export class ProductsModule {}
