import { ComponentRef, createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardEventsComponent } from './components/dashboard-events/dashboard-events.component';
import { CreateEventComponent } from './components/create-event/create-event.component';

const routes: Routes = [
  { path : 'dashboardEvents', component : DashboardEventsComponent},
  { path : 'createEvent', component : CreateEventComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventAdminRoutingModule { }
