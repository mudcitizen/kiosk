import { StaticDataProvider } from "./static.provider";
import { Guest } from "../models/Guest.model";
import { GuestRequest } from "../requests/guest.request";
import { Observable } from "rxjs";

describe("StaticDataProvider", () => {

    it("should find Guest # 10000I", () => {
        let dp: StaticDataProvider = new StaticDataProvider();
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
        let dp: StaticDataProvider = new StaticDataProvider();
        const expectedPk: string = "123456";
        let req = new GuestRequest();
        req.pk = expectedPk;
        dp.getGuests(req).subscribe((data: Guest[]) => {
            expect(data.length).toEqual(0);
        }
        )   // subscribe
    })     // it

    it("should find Guest Name Alvar", () => {
        let dp: StaticDataProvider = new StaticDataProvider();
        const expectedName: string = "alvar";
        let req = new GuestRequest();
        req.name = expectedName;
        dp.getGuests(req).subscribe((data: Guest[]) => {
            expect(data.length).toEqual(1);
            expect(data[0].lastName.toLowerCase().startsWith(expectedName)).toEqual(true);
        }
        )   // subscribe
    })     // it


})

