import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'private',
    loadChildren: ()=> import('./private-modules/private-modules.module').then(m=>m.PrivateModulesModule)
  },
  {
    path: 'public',
    loadChildren: ()=> import('./public-modules/public-modules.module').then(m=>m.PublicModulesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
