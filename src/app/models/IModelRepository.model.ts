interface IModelRepository {

    getReservation(pk:string) : Reservation;
    getReservationsByGuestName(name:string):Reservation[];
    getReservationsByReservationName(name:string):Reservation[];
    getReservationsByDate(stayDate:Date):Reservation[];
    updateReservation(reservation:Reservation):void;

    getGuest(pk:string) : Guest;
    getGuestsByName(name:string):Guest[];
    getGuestsByPhone(phoneNumber:string):Guest[];
    getGuestsByEmailAddress(emailAddress:string):Guest[];
    updateGuest(guest:Guest):void;

}