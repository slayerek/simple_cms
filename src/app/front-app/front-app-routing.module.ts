import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {FrontAppComponent} from './front-app.component';

const routes: Routes = [
    {
        path: '', component: FrontAppComponent,
        children: [
            {path: '', loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule)},
            {path: 'news', loadChildren: () => import('./modules/news/news.module').then(m => m.NewsModule)},
            {path: 'products', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FrontAppRoutingModule {}
