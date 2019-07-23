import { Guest } from "../models/Guest.model";
import {Reservation } from "../models/Reservation.model";
export interface ITestRowSource {
    getGuests() : Guest[];
    getReservations() : Reservation[]
}