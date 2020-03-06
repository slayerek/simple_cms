import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BackendAppComponent} from './backend-app.component';

import {AuthGuardService as AuthGuard} from '../services/auth-guard.service';

const routes: Routes = [
    {
        path: '', component: BackendAppComponent,
        children: [
            {path: '', loadChildren: () => import('./modules/modules/modules.module').then(m => m.ModulesModule), canActivate: [AuthGuard]},
            {path: 'strony', loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule), canActivate: [AuthGuard]},
            {path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)}
        ]
    }
];




@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BackendAppRoutingModule {}
