import { IDataProvider } from "./idata.provider";
import { GuestRequest } from "../requests/guest.request";
import { Guest } from "../models/Guest.model"; 
import { Reservation} from "../models/Reservation.model";
import { ReservationRequest } from "../requests/reservation.request";

export class StaticDataProvider implements IDataProvider {
    getGuests(request:GuestRequest) : Guest[] {return null;}
    getReservations(request:ReservationRequest) : Reservation[] {return null;}
}