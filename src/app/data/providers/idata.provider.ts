import { GuestRequest } from '../requests/guest.request'
import { Guest } from '../models/guest.model';
import { ReservationRequest } from '../requests/reservation.request'
import { Reservation } from '../models/reservation.model';
import { of,Observable } from "rxjs";

export interface IDataProvider {
    getGuests(GuestRequest) : Observable<Guest[]>;   
    getReservations(ReservationRequest) : Observable<Reservation[]>;   
}