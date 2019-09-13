import { Injectable } from '@angular/core';
import { Guest } from '../models/Guest.model';
import { GuestData } from '../models/Guest.data';
import { Reservation } from '../models/reservation.model';
import 'automapper-ts';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private theGuest: Guest;
  private theGuests: Guest[];
  private theReservation: Reservation
  private theReservations: Reservation[]

  constructor() {
  }

  public clear(): void {
    this.setGuest(null);
    this.setGuests(null);
    this.setReservation(null);
    this.setReservations(null);
  }
  public getGuest(): Guest {
    return this.theGuest;
  }

  public setGuest(aGuest: GuestData) {
    this.theGuest = automapper.map(GuestData, Guest, aGuest);
  }
  public getGuests(): Guest[] {
    return this.theGuests;
  }
  public setGuests(someGuests: GuestData[]): void {
    this.theGuests = new Array<Guest>();
    if (someGuests) {
      someGuests.forEach((aGuest:GuestData) => {
        let gm:Guest = automapper.map(GuestData, Guest, aGuest);
        this.theGuests.push(gm);
      });
    }
  }


  public getReservation(): Reservation {
    return this.theReservation;
  }
  public setReservation(aReservation: Reservation) {
    this.theReservation = aReservation;
  }
  public getReservations(): Reservation[] {
    return this.theReservations;
  }
  public setReservations(someReservations: Reservation[]) {
    this.theReservations = someReservations;
  }

}
