import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmPurchaseViewComponent } from './components/confirm-purchase-view/confirm-purchase-view.component';
import { PurchaseTicketsViewComponent } from './components/purchase-tickets-view/purchase-tickets-view.component';

const routes: Routes = [
  { path : "purchase-tickets", component : PurchaseTicketsViewComponent},
  { path : "confirm-purchase", component : ConfirmPurchaseViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicModulesRoutingModule { }
