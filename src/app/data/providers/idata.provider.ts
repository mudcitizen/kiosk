import { GuestRequest } from '../requests/guest.request'
import { Guest } from '../models/guest.model';
import { ReservationRequest } from '../requests/reservation.request'
import { Reservation } from '../models/reservation.model';

export interface IDataProvider {
    getGuests(GuestRequest) : Guest[];   
    getReservations(ReservationRequest) : Reservation[];   
}