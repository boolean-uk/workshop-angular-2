import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./features/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'client',
    loadChildren: () => import('./features/client/client.module').then((m) => m.ClientModule),
  }
];
