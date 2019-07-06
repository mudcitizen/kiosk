import { IDataProvider } from '../providers/idata.provider'
import { Guest} from './guest.model'
import { Reservation} from './reservation.model'

class ModelRepository {

    constructor(private dataProvider:IDataProvider) {}
    
    private guests:Guest[];
    private reservations:Reservation[];

    getReservation(pk: string): Reservation {
        return null;
    }

    getReservationsByGuestName(name: string): Reservation[] {
        return null;
    }
    getReservationsByReservationName(name: string): Reservation[] {
        return null;
    }
    getReservationsByDate(stayDate: Date): Reservation[] {
        return null;
    }
    updateReservation(reservation: Reservation): void 
    { 
        return; 
    }


    getGuest(pk: string): Guest {
        return null;
    }
    getGuestsByName(name: string): Guest[] {
        return null;
    }
    getGuestsByPhone(phoneNumber: string): Guest[] {
        return null;
    }

    getGuestsByEmailAddress(emailAddress: string): Guest[] {
        return null;
    }

    updateGuest(guest: Guest): void 
    { return }

}