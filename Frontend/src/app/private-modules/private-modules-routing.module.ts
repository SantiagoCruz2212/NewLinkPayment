import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authentication',
    loadChildren : () => import('./modules/authentication/authentication.module').then(m=>m.AuthenticationModule)
  },
  {
    path: 'adminEvent',
    loadChildren : () => import('./modules/event-admin/event-admin.module').then(m=>m.EventAdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateModulesRoutingModule { }
