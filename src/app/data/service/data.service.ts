import { Injectable } from '@angular/core';
import { Guest } from '../models/guest.model';
import { Reservation } from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private theGuest:Guest;
  private theGuests:Guest[];
  private theReservation:Reservation
  private theReservations:Reservation[]
 
  constructor() { 
  }

  public clear():void {
    this.setGuest(null);
    this.setGuests(null);
    this.setReservation(null);
    this.setReservations(null);
  }
  public getGuest() : Guest {
    return this.theGuest;
  }

  public setGuest(aGuest:Guest) 
  {
    this.theGuest = aGuest;
  }
  public getGuests() : Guest[] {
    return this.theGuests;
  }
  public setGuests(someGuests:Guest[]) 
  {
    this.theGuests = someGuests;
  }

  public getReservation() : Reservation {
    return this.theReservation;
  }
  public setReservation(aReservation:Reservation) {
    this.theReservation = aReservation;
  }
  public getReservations() : Reservation[] {
    return this.theReservations;
  }
  public setReservations(someReservations:Reservation[]) {
    this.theReservations = someReservations;
  }

}
