import { Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./pages/layout/layout.routes').then(m => m.LAYOUT_ROUTERS)},
  {
    path: 'login',
    component: LoginComponent
  }
];
