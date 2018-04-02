import { Routes } from '@angular/router';
import { entryComponents as app } from './app.factory';

export const appRoutes: Routes = [
  { path: 'home', component: app['HomeComponent'] },
  { path: 'about', component: app['AboutComponent'] },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
