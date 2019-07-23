import { StaticDataProvider } from "./static.provider";
import { Guest } from "../models/Guest.model";
import { GuestRequest } from "../requests/guest.request";
import { Observable } from "rxjs";
import { ITestRowSource } from "../providers/ITestRowSource";
import { Reservation } from "../models/reservation.model";

const expectedEmailAddress:string = "mudcitizen@gmail.com";
const expectedPhoneNumber:string = "8028886358";

describe("StaticDataProvider", () => {

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
        req.emailAddress = expectedEmailAddress.replace("mud","mad");
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
        req.phoneNumber = expectedPhoneNumber.replace("8","9");
        dp.getGuests(req).subscribe((data: Guest[]) => {
            expect(data.length).toEqual(0);
        }
        )   // subscribe
    })     // it


})

class EMailAddressTestRowSource implements ITestRowSource {
    getGuests() {
        let g:Guest = new Guest();
        g.emailAddress = expectedEmailAddress
        let gs:Array<Guest> = [g];
        return gs;
    }
    getReservations() {
        let rs:Array<Reservation> = [];
        return rs;
    }

}

class PhoneNumberTestRowSource implements ITestRowSource {
    getGuests() {
        let g:Guest = new Guest();
        g.phoneNumber = expectedPhoneNumber;
        let gs:Array<Guest> = [g];
        return gs;
    }
    getReservations() {
        let rs:Array<Reservation> = [];
        return rs;
    }

}


