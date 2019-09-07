import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { compileComponentFromMetadata } from '@angular/compiler';
import { FinderComponent } from './components/finder/finder.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { GuestComponent } from './components/guest/guest.component';
import { GuestsComponent } from './components/guests/guests.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ReservationsComponent } from './components/reservations/reservations.component';

/*
Confused - check out https://angular.io/tutorial/toh-pt5 In partiular, this link states
"The @NgModule metadata initializes the router and starts it listening for browser location changes"
*/

const routes: Routes = [ 
  { path: "finder", component: FinderComponent },
  { path: "guest", component: GuestComponent },
  { path: "guests", component: GuestsComponent },
  { path: "reservation", component: ReservationComponent },
  { path: "reservations", component: ReservationsComponent },
  { path: "", redirectTo: "/finder", pathMatch: "full" },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  /*
  The following creates a module with all the router directives and a provider registering routes
  */
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
