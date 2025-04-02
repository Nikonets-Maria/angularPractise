import { Routes } from '@angular/router';
import { RecepiesListPageComponent } from './pages/recepies-list-page/recepies-list-page.component';
import { RecepiesItemPageComponent } from './pages/recepies-item-page/recepies-item-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

export const routes: Routes = [
    // {redirectTo: 'home', path: '', pathMatch: 'full'},
    // {component: RecepiesListPageComponent, path: 'home'},
    // {component: RecepiesItemPageComponent, path: 'home/:id'},

    {redirectTo: 'breakfast/all', path: '', pathMatch: 'full'},
    {component: RecepiesListPageComponent, path: 'breakfast/all'},
    {component: RecepiesItemPageComponent, path: 'recipe/:id'},

    {component: RecepiesItemPageComponent, path: 'breakfast/all'},
    {component: RecepiesItemPageComponent, path: 'breakfast/easy'},
    {component: RecepiesItemPageComponent, path: 'breakfast/medium'},
    {component: RecepiesItemPageComponent, path: 'lunch/all'},
    {component: RecepiesItemPageComponent, path: 'lunch/easy'},
    {component: RecepiesItemPageComponent, path: 'lunch/medium'},
    {component: RecepiesItemPageComponent, path: 'dinner/all'},
    {component: RecepiesItemPageComponent, path: 'dinner/easy'},
    {component: RecepiesItemPageComponent, path: 'dinner/medium'},

    {component: NotFoundPageComponent, path: '**'},

];
