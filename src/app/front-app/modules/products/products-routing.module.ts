import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProductsComponent} from './products.component';
import {ProductItemComponent} from './product-item/product-item.component';
import {ProductNotFoundComponent} from './product-not-found/product-not-found.component';

const routes: Routes = [
    {path: '', component: ProductsComponent},
    {path: ':id', component: ProductItemComponent},
    {path: 'prod-not-found', component: ProductNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {}
