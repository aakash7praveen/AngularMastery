import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.HomePage) },
  { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.AboutPage) },
  { path: 'profile', loadComponent: () => import('./pages/profile/profile').then(m => m.ProfilePage) },
  { path: 'auth', loadChildren: () => import('./features/auth/auth-module').then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
