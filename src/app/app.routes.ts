import { RouterModule, Routes } from '@angular/router';
import { AppShellComponent } from './shared/layout/app-shell/app-shell.component';
import { NgModule } from '@angular/core';

export const ROUTES: Routes = [
  {
    path:'',
    component: AppShellComponent
  },
  {
    path: 'secure',
    component: AppShellComponent,
    children: [
      {
        path: 'user',
        loadChildren: () => import('./features/user/user.module').then((m) => m.UserModule),
      },
      {
        path: 'client',
        loadChildren: () => import('./features/client/client.module').then((m) => m.ClientModule),
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})

export class AppRoutingModule {}