import {StaticDataProvider } from "./static.provider";
import { Guest } from "../models/Guest.model";
import { GuestRequest } from "../requests/guest.request";
import { Observable } from "rxjs";

describe("StaticDataProvider", () => {

    it("should find Guest # 10000I", () => {
        let dp:StaticDataProvider = new StaticDataProvider();
        const expectedPk:string = "10000I";
        let req = new GuestRequest();
        req.pk = expectedPk;
        dp.getGuests(req).subscribe((data:Guest[]) => {
            expect(data.length).toEqual(1);
            expect(data[0].pk).toEqual(expectedPk);
        } 
        )   // subscribe
    } )     // it

})

