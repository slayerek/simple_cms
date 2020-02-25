import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BackendAppComponent} from './backend-app.component';


const routes: Routes = [
    {
        path: '', component: BackendAppComponent,
        children: [
            {path: '', loadChildren: () => import('./modules/modules/modules.module').then(m => m.ModulesModule)},
            {path: 'strony', loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule)}
        ]
    }
];




@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BackendAppRoutingModule {}
