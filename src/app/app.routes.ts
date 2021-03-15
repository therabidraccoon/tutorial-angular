import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PrimoComponent } from './components/primo/primo.component';
import { PadreComponent } from './components/padre/padre.component';

export const routes: Routes = [
  { path: '', component: PrimoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'padre', component: PadreComponent },
];
