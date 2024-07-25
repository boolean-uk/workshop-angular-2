import { RouterModule, Routes } from '@angular/router';
import { AppShellComponent } from './shared/layout/app-shell/app-shell.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: 'user',
    component: AppShellComponent,
    loadChildren: () => import('./features/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'client',
    component: AppShellComponent,
    loadChildren: () => import('./features/client/client.module').then((m) => m.ClientModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
