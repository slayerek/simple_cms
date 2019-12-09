import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
    {path: '', loadChildren: () => import('./front-app/front-app.module').then(m => m.FrontAppModule)},
    {path: 'dashboard', loadChildren: () => import('./backend-app/backend-app.module').then(m => m.BackendAppModule)}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
