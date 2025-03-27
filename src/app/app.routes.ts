import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './auth/register.component';
import { PopularComponent } from './main/popular.component';
import { DownloadsComponent } from './main/downloads.component';
import { ComingSoonComponent } from './main/upcoming.component';
import { AddGameComponent } from './main/add-game.component';
import { LogoutComponent } from './main/logout.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  {
    path: 'main',
    canActivateChild: [authGuard],
    children: [
      { path: 'popular', component: PopularComponent },
      { path: 'downloads', component: DownloadsComponent },
      { path: 'upcoming', component: ComingSoonComponent },
      { path: 'add-game', component: AddGameComponent },
      { path: 'logout', component: LogoutComponent }
    ]
  },
  { path: '**', redirectTo: 'auth/login' }
];