import { GuestData } from "../models/Guest.data";
import {Reservation } from "../models/Reservation.model";
export interface ITestRowSource {
    getGuests() : GuestData[];
    getReservations() : Reservation[]
}