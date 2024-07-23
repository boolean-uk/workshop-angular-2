import { Routes } from '@angular/router';
import { AppShellComponent } from './shared/layout/app-shell/app-shell.component';

export const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
    loadChildren: () => import('./features/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'client',
    component: AppShellComponent,
    loadChildren: () => import('./features/client/client.module').then((m) => m.ClientModule),
  }
];
