import { StaticDataProvider } from "./static.provider";
import { Guest } from "../models/Guest.model";
import { GuestRequest } from "../requests/guest.request";
import { Observable } from "rxjs";
import { ITestRowSource } from "../providers/ITestRowSource";
import { Reservation } from "../models/reservation.model";
import { ReservationRequest } from "../requests/reservation.request";

const expectedEmailAddress: string = "mudcitizen@gmail.com";
const expectedPhoneNumber: string = "8028886358";
const expectedResPk: string = "123456"
const expectedDateMonth: number = 2; // 0 based ; 0-11 so 2 = March
const expectedDateDay: number = 4;
const expectedDateYear: number = 2016;
const expectedDate = new Date(expectedDateYear, expectedDateMonth, expectedDateDay);


describe("StaticDataProvider - Guests", () => {

    it("should find Guest # 10000I", () => {
        let dp: StaticDataProvider = new StaticDataProvider(null);
        const expectedPk: string = "10000I";
        let req = new GuestRequest();
        req.pk = expectedPk;
        dp.getGuests(req).subscribe((data: Guest[]) => {
            expect(data.length).toEqual(1);
            expect(data[0].pk).toEqual(expectedPk);
        }
        )   // subscribe
    })     // it

    it("should not find Guest # 123456", () => {
        let dp: StaticDataProvider = new StaticDataProvider(null);
        const expectedPk: string = "123456";
        let req = new GuestRequest();
        req.pk = expectedPk;
        dp.getGuests(req).subscribe((data: Guest[]) => {
            expect(data.length).toEqual(0);
        }
        )   // subscribe
    })     // it

    it("should find Guest Name Alvar", () => {
        let dp: StaticDataProvider = new StaticDataProvider(null);
        const expectedName: string = "alvar";
        let req = new GuestRequest();
        req.name = expectedName;
        dp.getGuests(req).subscribe((data: Guest[]) => {
            expect(data.length).toEqual(1);
            expect(data[0].lastName.toLowerCase().startsWith(expectedName)).toEqual(true);
        }
        )   // subscribe
    })     // it

    it("should find email", () => {
        let dp: StaticDataProvider = new StaticDataProvider(new EMailAddressTestRowSource());
        let req = new GuestRequest();
        req.emailAddress = expectedEmailAddress;
        dp.getGuests(req).subscribe((data: Guest[]) => {
            expect(data.length).toEqual(1);
        }
        )   // subscribe
    })     // it

    it("should not find email", () => {
        let dp: StaticDataProvider = new StaticDataProvider(new EMailAddressTestRowSource());
        let req = new GuestRequest();
        req.emailAddress = expectedEmailAddress.replace("mud", "mad");
        dp.getGuests(req).subscribe((data: Guest[]) => {
            expect(data.length).toEqual(0);
        }
        )   // subscribe
    })     // it
    it("should find phone", () => {
        let dp: StaticDataProvider = new StaticDataProvider(new PhoneNumberTestRowSource());
        let req = new GuestRequest();
        req.phoneNumber = expectedPhoneNumber;
        dp.getGuests(req).subscribe((data: Guest[]) => {
            expect(data.length).toEqual(1);
        }
        )   // subscribe
    })     // it

    it("should not find phone", () => {
        let dp: StaticDataProvider = new StaticDataProvider(new PhoneNumberTestRowSource());
        let req = new GuestRequest();
        req.phoneNumber = expectedPhoneNumber.replace("8", "9");
        dp.getGuests(req).subscribe((data: Guest[]) => {
            expect(data.length).toEqual(0);
        }
        )   // subscribe
    })     // it
})

describe("StaticDataProvider - Reservations ",() => {

    it("should find Res Arriving expectedDate", () => {

        let rows: ITestRowSource = {

            getGuests(): Guest[] {
                let gs: Array<Guest> = []
                return gs;
            },

            getReservations(): Reservation[] {
                let r: Reservation = new Reservation();
                r.pk = expectedResPk;
                r.arrival = expectedDate;
                r.depart = new Date(expectedDateYear, expectedDateMonth, expectedDateDay + 1);
                let rs: Array<Reservation> = [];
                rs.push(r);
                r = new Reservation();

                // too late
                r.pk = "TOOLATE";
                r.arrival = new Date(expectedDateYear, expectedDateMonth, expectedDateDay + 10);
                r.depart = new Date(expectedDateYear, expectedDateMonth, expectedDateDay + 11);
                rs.push(r)

                // too early
                r.pk = "TOOEARLY";
                r.arrival = new Date(expectedDateYear, expectedDateMonth, expectedDateDay - 12);
                r.depart = new Date(expectedDateYear, expectedDateMonth, expectedDateDay - 10);
                rs.push(r);

                return rs;
            }
        }
        let dp: StaticDataProvider = new StaticDataProvider(rows);
        let req: ReservationRequest = new ReservationRequest();
        req.date = expectedDate;
        dp.getReservations(req).subscribe((data: Reservation[]) => {
            expect(data.length).toEqual(1);
            expect(data[0].pk).toEqual(expectedResPk);
            expect(data[0].arrival).toEqual(expectedDate);
        })   // subscribe
    })      // it

    it("should find Res Departing expectedDate", () => {

        let rows: ITestRowSource = {

            getGuests(): Guest[] {
                let gs: Array<Guest> = []
                return gs;
            },

            getReservations(): Reservation[] {
                let r: Reservation = new Reservation();
                r.pk = expectedResPk;
                r.arrival = new Date(expectedDateYear, expectedDateMonth, expectedDateDay - 1);
                r.depart = new Date(expectedDateYear, expectedDateMonth, expectedDateDay);
                let rs: Array<Reservation> = [];
                rs.push(r);
                r = new Reservation();

                // too late
                r.pk = "TOOLATE";
                r.arrival = new Date(expectedDateYear, expectedDateMonth, expectedDateDay + 10);
                r.depart = new Date(expectedDateYear, expectedDateMonth, expectedDateDay + 11);
                rs.push(r)

                // too early
                r.pk = "TOOEARLY";
                r.arrival = new Date(expectedDateYear, expectedDateMonth, expectedDateDay - 12);
                r.depart = new Date(expectedDateYear, expectedDateMonth, expectedDateDay - 10);
                rs.push(r);

                return rs;
            }
        }
        let dp: StaticDataProvider = new StaticDataProvider(rows);
        let req: ReservationRequest = new ReservationRequest();
        req.date = expectedDate;
        dp.getReservations(req).subscribe((data: Reservation[]) => {
            expect(data.length).toEqual(1);
            expect(data[0].pk).toEqual(expectedResPk);
            expect(data[0].depart).toEqual(expectedDate);
        })   // subscribe
    })      // it

    it("should find Res Arrival < expectedDate < Depart", () => {

        let rows: ITestRowSource = {

            getGuests(): Guest[] {
                let gs: Array<Guest> = []
                return gs;
            },

            getReservations(): Reservation[] {
                let r: Reservation = new Reservation();
                r.pk = expectedResPk;
                r.arrival = new Date(expectedDateYear, expectedDateMonth, expectedDateDay - 2);
                r.depart = new Date(expectedDateYear, expectedDateMonth, expectedDateDay + 2);
                let rs: Array<Reservation> = [];
                rs.push(r);
                r = new Reservation();

                // too late
                r.pk = "TOOLATE";
                r.arrival = new Date(expectedDateYear, expectedDateMonth, expectedDateDay + 10);
                r.depart = new Date(expectedDateYear, expectedDateMonth, expectedDateDay + 11);
                rs.push(r)

                // too early
                r.pk = "TOOEARLY";
                r.arrival = new Date(expectedDateYear, expectedDateMonth, expectedDateDay - 12);
                r.depart = new Date(expectedDateYear, expectedDateMonth, expectedDateDay - 10);
                rs.push(r);

                return rs;
            }
        }
        let dp: StaticDataProvider = new StaticDataProvider(rows);
        let req: ReservationRequest = new ReservationRequest();
        req.date = expectedDate;
        dp.getReservations(req).subscribe((data: Reservation[]) => {
            expect(data.length).toEqual(1);
            expect(data[0].pk).toEqual(expectedResPk);
        })   // subscribe
    })      // it

    it("should not find any Res", () => {

        let rows: ITestRowSource = {

            getGuests(): Guest[] {
                let gs: Array<Guest> = []
                return gs;
            },

            getReservations(): Reservation[] {
                let r: Reservation = new Reservation();
                r.pk = expectedResPk;
                r.arrival = new Date(expectedDateYear, expectedDateMonth, expectedDateDay - 2);
                r.depart = new Date(expectedDateYear, expectedDateMonth, expectedDateDay + 2);
                let rs: Array<Reservation> = [];
                rs.push(r);
                r = new Reservation();

                // too late
                r.pk = "TOOLATE";
                r.arrival = new Date(expectedDateYear, expectedDateMonth, expectedDateDay + 10);
                r.depart = new Date(expectedDateYear, expectedDateMonth, expectedDateDay + 11);
                rs.push(r)

                // too early
                r.pk = "TOOEARLY";
                r.arrival = new Date(expectedDateYear, expectedDateMonth, expectedDateDay - 12);
                r.depart = new Date(expectedDateYear, expectedDateMonth, expectedDateDay - 10);
                rs.push(r);

                return rs;
            }
        }
        let dp: StaticDataProvider = new StaticDataProvider(rows);
        let req: ReservationRequest = new ReservationRequest();
        req.date = new Date(expectedDateYear+1, expectedDateMonth, expectedDateDay)
        dp.getReservations(req).subscribe((data: Reservation[]) => {
            expect(data.length).toEqual(0);
        })   // subscribe
    })      // it

    it("should find res with pk", () => {
        let rows: ITestRowSource = {

            getGuests(): Guest[] {
                let gs: Array<Guest> = []
                return gs;
            },

            getReservations(): Reservation[] {
                let r: Reservation = new Reservation();
                r.pk = expectedResPk;
                r.arrival = new Date(expectedDateYear, expectedDateMonth, expectedDateDay - 2);
                r.depart = new Date(expectedDateYear, expectedDateMonth, expectedDateDay + 2);
                let rs: Array<Reservation> = [];
                rs.push(r);
                r = new Reservation();

                // too late
                r.pk = "TOOLATE";
                r.arrival = new Date(expectedDateYear, expectedDateMonth, expectedDateDay + 10);
                r.depart = new Date(expectedDateYear, expectedDateMonth, expectedDateDay + 11);
                rs.push(r)

                // too early
                r.pk = "TOOEARLY";
                r.arrival = new Date(expectedDateYear, expectedDateMonth, expectedDateDay - 12);
                r.depart = new Date(expectedDateYear, expectedDateMonth, expectedDateDay - 10);
                rs.push(r);

                return rs;
            }
        }
        let dp: StaticDataProvider = new StaticDataProvider(rows);
        let req: ReservationRequest = new ReservationRequest();
        req.pk = expectedResPk;
        dp.getReservations(req).subscribe((data: Reservation[]) => {
            expect(data.length).toEqual(1);
            expect(data[0].pk).toEqual(expectedResPk);
        })   // subscribe

    })

    it("should not find res with pk", () => {
        let rows: ITestRowSource = {

            getGuests(): Guest[] {
                let gs: Array<Guest> = []
                return gs;
            },

            getReservations(): Reservation[] {
                let r: Reservation = new Reservation();
                r.pk = expectedResPk;
                r.arrival = new Date(expectedDateYear, expectedDateMonth, expectedDateDay - 2);
                r.depart = new Date(expectedDateYear, expectedDateMonth, expectedDateDay + 2);
                let rs: Array<Reservation> = [];
                rs.push(r);
                r = new Reservation();

                // too late
                r.pk = "TOOLATE";
                r.arrival = new Date(expectedDateYear, expectedDateMonth, expectedDateDay + 10);
                r.depart = new Date(expectedDateYear, expectedDateMonth, expectedDateDay + 11);
                rs.push(r)

                // too early
                r.pk = "TOOEARLY";
                r.arrival = new Date(expectedDateYear, expectedDateMonth, expectedDateDay - 12);
                r.depart = new Date(expectedDateYear, expectedDateMonth, expectedDateDay - 10);
                rs.push(r);

                return rs;
            }
        }
        let dp: StaticDataProvider = new StaticDataProvider(rows);
        let req: ReservationRequest = new ReservationRequest();
        req.pk = "ASDFADFADFADFAFAFAFASDF";
        dp.getReservations(req).subscribe((data: Reservation[]) => {
            expect(data.length).toEqual(0);
        })   // subscribe

    })

})  // describe 

class EMailAddressTestRowSource implements ITestRowSource {
    getGuests() {
        let g: Guest = new Guest();
        g.emailAddress = expectedEmailAddress
        let gs: Array<Guest> = [g];
        return gs;
    }
    getReservations() {
        let rs: Array<Reservation> = [];
        return rs;
    }

}

class PhoneNumberTestRowSource implements ITestRowSource {
    getGuests() {
        let g: Guest = new Guest();
        g.phoneNumber = expectedPhoneNumber;
        let gs: Array<Guest> = [g];
        return gs;
    }
    getReservations() {
        let rs: Array<Reservation> = [];
        return rs;
    }

}