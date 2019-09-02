import { Injectable } from '@angular/core';
import { Guest } from '../models/guest.model';
import { Reservation } from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  protected theGuest:Guest;
  protected theReservation:Reservation
  constructor() { 
    console.log("Hello from DataService.construtor")
  }

  public getGuest() : Guest {
    return this.theGuest;
  }

  public setGuest(aGuest:Guest) 
  {
    this.theGuest = aGuest;
  }

  public getReservation() : Reservation {
    return this.theReservation;
  }
  public setReservation(aReservation:Reservation) {
    this.theReservation = aReservation;
  }

}
