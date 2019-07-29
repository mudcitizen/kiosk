import { GuestRequest } from '../requests/guest.request'
import { Guest } from '../models/guest.model';
import { ReservationRequest } from '../requests/reservation.request'
import { Reservation } from '../models/reservation.model';
import { Observable, fromEventPattern } from "rxjs";
import { InjectionToken } from "@angular/core"
import { Injection_Token_DataProvider} from "../../common/constants"


export interface IDataProvider {
    getGuests(GuestRequest) : Observable<Guest[]>;   
    getReservations(ReservationRequest) : Observable<Reservation[]>;   
}

export let DATA_PROVIDER = new InjectionToken<IDataProvider>(Injection_Token_DataProvider);
