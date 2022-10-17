import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventAdminRoutingModule } from './event-admin-routing.module';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CardEventComponent } from './components/dashboard-events/components/card-event/card-event.component';
import { DashboardEventsComponent } from './components/dashboard-events/dashboard-events.component';
import { LinkComponent } from './components/create-event/components/link/link.component';
import { NoLinksComponent } from './components/create-event/components/no-links/no-links.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { LoadingCenterComponent } from './components/loading-center/loading-center.component';
import { LoadingCornerComponent } from './components/loading-corner/loading-corner.component';
import { CreateLinkComponent } from './components/create-link/create-link.component';

@NgModule({
  declarations: [
    DashboardEventsComponent,
    NavbarComponent,
    CardEventComponent,
    LinkComponent,
    NoLinksComponent,
    CreateEventComponent,
    LoadingCenterComponent,
    LoadingCornerComponent,
    CreateLinkComponent
  ],
  imports: [
    CommonModule,
    EventAdminRoutingModule
  ],
  exports: [
    CardEventComponent
  ]
})
export class EventAdminModule { }
