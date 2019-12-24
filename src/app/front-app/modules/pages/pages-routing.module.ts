import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MainPageComponent} from './main-page/main-page.component';
import {PagesComponent} from './pages.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [

    {path: '', component: MainPageComponent},
    {path: ':id', component: PagesComponent},
    {path: 'page-not-found', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
