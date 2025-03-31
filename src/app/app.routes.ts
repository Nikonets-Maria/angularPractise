import { Routes } from '@angular/router';
import { RecepiesListPageComponent } from './pages/recepies-list-page/recepies-list-page.component';
import { RecepiesItemPageComponent } from './pages/recepies-item-page/recepies-item-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

export const routes: Routes = [
    {redirectTo: 'home', path: '', pathMatch: 'full'},
    {component: RecepiesListPageComponent, path: 'home'},
    {component: RecepiesItemPageComponent, path: 'home/:id'},
    {component: NotFoundPageComponent, path: '**'},

];
