import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome';
import { MenuComponent } from './pages/menu/menu';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: '**', redirectTo: '' }
];