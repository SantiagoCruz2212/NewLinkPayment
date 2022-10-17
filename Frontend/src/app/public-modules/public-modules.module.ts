import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicModulesRoutingModule } from './public-modules-routing.module';
import { PurchaseTicketsViewComponent } from './components/purchase-tickets-view/purchase-tickets-view.component';
import { ConfirmPurchaseViewComponent } from './components/confirm-purchase-view/confirm-purchase-view.component';


@NgModule({
  declarations: [
    PurchaseTicketsViewComponent,
    ConfirmPurchaseViewComponent
  ],
  imports: [
    CommonModule,
    PublicModulesRoutingModule
  ]
})
export class PublicModulesModule { }
