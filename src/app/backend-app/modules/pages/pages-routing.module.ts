import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PagesComponent} from './pages.component';
import {PageComponent} from './page/page.component';

const routes: Routes = [
    {path: '', component: PagesComponent},
    {path: ':id', component: PageComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
