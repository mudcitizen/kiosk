import { IDataProvider } from "./idata.provider";
import { ITestRowSource } from "./ITestRowSource"
import { GuestRequest } from "../requests/guest.request";
import { Guest } from "../models/Guest.model";
import { Reservation } from "../models/Reservation.model";
import { ReservationRequest } from "../requests/reservation.request";
import { of, Observable } from "rxjs";


export class StaticDataProvider implements IDataProvider {

    protected guests: Guest[] = [{ "address": "3964 Harper Street", "city": "Burkesville", "company": "Techo Solutions", "country": "US", "emailAddress": "LindaGAlvarez@cuvox.de", "firstName": "Linda", "lastName": "Alvarez", "phoneNumber": "270-433-4307", "pk": "10000I", "properName": "", "state": "KY", "title": "Ms.", "zip": "42717" }, { "address": "2475 Sugar Camp Road", "city": "Minneapolis", "company": "ACME Tool Company", "country": "US", "emailAddress": "banderson@myemail.com", "firstName": "Bruce", "lastName": "Anderson", "phoneNumber": "507-555-1312", "pk": "10000O", "properName": "", "state": "MN", "title": "Mr.", "zip": "55402" }, { "address": "4196 Boulevard Lafleche", "city": "St Georges", "company": "Griff's Hamburgers", "country": "CA", "emailAddress": "ManuelPA@jourrapide.com", "firstName": "Manuel", "lastName": "Andino", "phoneNumber": "418-221-7115", "pk": "10000Q", "properName": "", "state": "QC", "title": "Mr.", "zip": "G5Y 1X7" }, { "address": "1199 Avenue Royale", "city": "Quebec", "company": "Star Bright Investment Group", "country": "CA", "emailAddress": "L.BARRY@MAIL.COM", "firstName": "Lorraine", "lastName": "Barry", "phoneNumber": "418-554-0807", "pk": "10001W", "properName": "", "state": "QC", "title": "Ms.", "zip": "G1E 2L3" }, { "address": "Fornang 8", "city": "Lodose", "company": "", "country": "SE", "emailAddress": "ZeldaBerg@psms.com", "firstName": "Zelda", "lastName": "Berg", "phoneNumber": "0520-4128815", "pk": "10002F", "properName": "", "state": "", "title": "Prof.", "zip": "460 10" }, { "address": "19 St James Boulevard", "city": "Hotham", "company": "", "country": "UK", "emailAddress": "MaxB@myemail.com", "firstName": "Max", "lastName": "Bratcher", "phoneNumber": "070 4276 3876", "pk": "100049", "properName": "", "state": "", "title": "Mr.", "zip": "YO43 6QZ" }, { "address": "833 Star Trek Drive", "city": "Pensacola", "company": "Omni Tech", "country": "US", "emailAddress": "DanielMButler@rhyta.com", "firstName": "Daniel", "lastName": "Butler", "phoneNumber": "850-390-1453", "pk": "10004C", "properName": "", "state": "FL", "title": "Mr.", "zip": "32507" }, { "address": "965 Musgrave Street", "city": "Oklahoma City", "company": "Enviro Architectural Designs", "country": "US", "emailAddress": "TrentonMButler@psms.com", "firstName": "Trenton", "lastName": "Butler", "phoneNumber": "405-200-5088", "pk": "10004A", "properName": "", "state": "OK", "title": "Mr.", "zip": "73102" }, { "address": "1255 Woodside Circle", "city": "Crestview", "company": "Foreman & Clark", "country": "US", "emailAddress": null, "firstName": "Terrence", "lastName": "Campbell", "phoneNumber": "850-683-5963", "pk": "10004G", "properName": "", "state": "FL", "title": "Mr.", "zip": "32536" }, { "address": "2594 Redbud Drive", "city": "Whitestone", "company": "", "country": "US", "emailAddress": "WilliamC@einrot.com", "firstName": "William", "lastName": "Castle", "phoneNumber": "347-768-7554", "pk": "100062", "properName": "", "state": "NY", "title": "Mr.", "zip": "11357" }, { "address": "4048 White Point Road", "city": "Digby", "company": "Payless Cashways", "country": "CA", "emailAddress": "TinaLDaly@einrot.com", "firstName": "Tina", "lastName": "Daly", "phoneNumber": "902-378-5008", "pk": "10006Z", "properName": "", "state": "NS", "title": "Ms.", "zip": "B0V 1A0" }, { "address": "2211 Hillhaven Drive", "city": "Los Angeles", "company": "Shabby Chic", "country": "US", "emailAddress": "JohnCDandrea@fleckens.hu", "firstName": "John", "lastName": "Dandrea", "phoneNumber": "323-881-7227", "pk": "100070", "properName": "", "state": "CA", "title": "Mr.", "zip": "90063" }, { "address": "3928 Pride Avenue", "city": "Bronx", "company": "Mr. Clark's Appliances", "country": "US", "emailAddress": "ShirleyMDean@fleckens.hu", "firstName": "Shirley", "lastName": "Dean", "phoneNumber": "718-293-9350", "pk": "10007F", "properName": "", "state": "NY", "title": "Ms.", "zip": "10452" }, { "address": "1457 Voortrekker St", "city": "Amanzimtoti", "company": "Colonial Stores", "country": "ZA", "emailAddress": "KennethMElls@psms.com", "firstName": "Kenneth", "lastName": "Ells", "phoneNumber": "083 200 1631", "pk": "10008O", "properName": "", "state": "NL", "title": "Mr.", "zip": "04125" }, { "address": "1172 Black Stallion Road", "city": "Burlington", "company": "Furrow's", "country": "US", "emailAddress": "ThomasCFalgout@cuvox.de", "firstName": "Thomas", "lastName": "Falgout", "phoneNumber": "859-586-5467", "pk": "10008Z", "properName": "", "state": "KY", "title": "Mr.", "zip": "41005" }, { "address": "7166 Cherry Lane", "city": "Holtsville", "company": "Franklin-Mayers Wedding", "country": "US", "emailAddress": null, "firstName": "", "lastName": "Franklin-Mayers Wedding", "phoneNumber": "887-101-9981", "pk": "1000YJ", "properName": "", "state": "NY", "title": "", "zip": "00501" }, { "address": "3967 Sheila Lane", "city": "Pahrump", "company": "Hughes Markets", "country": "US", "emailAddress": "MaggieGreen@myemail.com", "firstName": "Margaret", "lastName": "Garvey", "phoneNumber": "775-537-2519", "pk": "1000AK", "properName": "", "state": "NV", "title": "Mrs.", "zip": "89041" }, { "address": "3905 Mt Edward Rd", "city": "Charlottetown", "company": "Pacific Stereo", "country": "CA", "emailAddress": null, "firstName": "Michael", "lastName": "Hendrix", "phoneNumber": "902-367-4594", "pk": "1000DM", "properName": "", "state": "NS", "title": "Mr.", "zip": "C1A 5T1" }, { "address": "3511 Woodhill Avenue", "city": "Queenstown", "company": "Golden's Distributors", "country": "US", "emailAddress": "HazelJHolst@einrot.com", "firstName": "Hazel", "lastName": "Holst", "phoneNumber": "410-827-9632", "pk": "1000E8", "properName": "", "state": "MD", "title": "Ms.", "zip": "21658" }, { "address": "1389 Wayside Lane", "city": "Oakland", "company": "House Of Denmark", "country": "US", "emailAddress": "CharlesVHoneycutt@psms.com", "firstName": "Charles", "lastName": "Honeycutt", "phoneNumber": "510-288-8520", "pk": "1000E9", "properName": "", "state": "CA", "title": "Mr.", "zip": "94612" }, { "address": "3048 Centennial Farm Road", "city": "Alton", "company": "Monk Home Funding Services", "country": "US", "emailAddress": "AdamDJackson@cuvox.de", "firstName": "Adam", "lastName": "Jackson", "phoneNumber": "712-756-0705", "pk": "1000F7", "properName": "", "state": "IA", "title": "Mr.", "zip": "51003" }, { "address": "2033 Lynden Road", "city": "Cavan", "company": "Expo Design", "country": "CA", "emailAddress": "aking@psms.com", "firstName": "Adam", "lastName": "King", "phoneNumber": "705-944-4439", "pk": "1000GQ", "properName": "", "state": "ON", "title": "Mr.", "zip": "L0A 1C0" }, { "address": "2402 Pleasant Hill Road", "city": "Paramount", "company": "Anderson-Little", "country": "US", "emailAddress": "MarvisPKing@psms.com", "firstName": "Marvis", "lastName": "King", "phoneNumber": "562-220-9748", "pk": "1000GP", "properName": "", "state": "CA", "title": "Mr.", "zip": "90723" }, { "address": "557 Davisson Street", "city": "Rushville", "company": "", "country": "US", "emailAddress": "WandaSM@gustr.com", "firstName": "Wanda", "lastName": "MacBride", "phoneNumber": "765-938-1802", "pk": "1000J8", "properName": "", "state": "IN", "title": "Ms.", "zip": "46173" }, { "address": "2938 Java Lane", "city": "Charlotte", "company": "Simply Save", "country": "US", "emailAddress": "VickiTMcGee@cuvox.de", "firstName": "Vicki", "lastName": "McGee", "phoneNumber": "803-524-8756", "pk": "1000KD", "properName": "", "state": "SC", "title": "Mrs.", "zip": "28208" }, { "address": "3609 Hardesty Street", "city": "Albany", "company": "Fellowship Investments", "country": "US", "emailAddress": "AmandaCPark@myemail.com", "firstName": "Amanda", "lastName": "Park", "phoneNumber": "518-476-5687", "pk": "1000NA", "properName": "", "state": "NY", "title": "Mrs.", "zip": "12207" }, { "address": "3281 Oak Way", "city": "Lincoln", "company": "Nan Duskin", "country": "US", "emailAddress": "DonaldT@psms.com", "firstName": "Donald", "lastName": "Tanner", "phoneNumber": "402-466-5123", "pk": "1000TV", "properName": "", "state": "NE", "title": "Mr.", "zip": "68504" }, { "address": "624 Heritage Drive", "city": "Calgary", "company": "", "country": "CA", "emailAddress": "JosephHThornton@rhyta.com", "firstName": "Joseph", "lastName": "Thornton", "phoneNumber": "403-540-2550", "pk": "1000UM", "properName": "", "state": "AB", "title": "Mr.", "zip": "T2V 2W2" }, { "address": "4237 Tennessee Avenue", "city": "Southfield", "company": "Total Quality", "country": "US", "emailAddress": "PaulineMU@cuvox.de", "firstName": "Pauline", "lastName": "Upton", "phoneNumber": "248-352-6981", "pk": "1000V9", "properName": "", "state": "MI", "title": "Mrs.", "zip": "48034" }, { "address": "105 Shinn Street", "city": "New York", "company": "Paul's Record Hut", "country": "US", "emailAddress": "BARBW@MYEMAIL.COM", "firstName": "Barbara", "lastName": "Wynn", "phoneNumber": "212-748-2246", "pk": "1000XS", "properName": "", "state": "NY", "title": "Ms.", "zip": "10007" }];

    protected reservations: Reservation[] =
        [
            {
                "arrival": new Date("2016-03-15T00:00:00Z"),
                "depart": new Date("2016-03-17T00:00:00Z"),
                "guestPk": "10000I",
                "level": "CNF",
                "name": "Alvarez, Linda",
                "package": "",
                "packageCode": "RACKRR",
                "packageName": "Rack Rate",
                "pk": "1000HJ",
                "roomNumber": "A1KMC",
                "roomType": null
            },
            {
                "arrival": new Date("2016-04-12T00:00:00Z"),
                "depart": new Date("2016-04-14T00:00:00Z"),
                "guestPk": "10000O",
                "level": "CNF",
                "name": "Anderson, Bruce",
                "package": "",
                "packageCode": "RACKRR",
                "packageName": "Rack Rate",
                "pk": "1000HS",
                "roomNumber": "A1KM",
                "roomType": null
            },
            {
                "arrival": new Date("2016-05-26T00:00:00Z"),
                "depart": new Date("2016-05-31T00:00:00Z"),
                "guestPk": "10000O",
                "level": "NEW",
                "name": "Anderson, Bruce",
                "package": "",
                "packageCode": "RACKRR",
                "packageName": "Rack Rate",
                "pk": "1000HT",
                "roomNumber": "A1KM",
                "roomType": null
            },
            {
                "arrival": new Date("2016-03-30T00:00:00Z"),
                "depart": new Date("2016-04-01T00:00:00Z"),
                "guestPk": "10000Q",
                "level": "NEW",
                "name": "Andino, Manuel",
                "package": "",
                "packageCode": "PKSP01",
                "packageName": "Spa Escape Package",
                "pk": "1000JI",
                "roomNumber": "B1KM",
                "roomType": null
            },
            {
                "arrival": new Date("2016-03-28T00:00:00Z"),
                "depart": new Date("2016-03-29T00:00:00Z"),
                "guestPk": "10001W",
                "level": "CNF",
                "name": "Barry, Lorraine",
                "package": "",
                "packageCode": "PKGF01",
                "packageName": "Golf Escape Package",
                "pk": "1000HY",
                "roomNumber": "A1KM",
                "roomType": null
            },
            {
                "arrival": new Date("2016-05-01T00:00:00Z"),
                "depart": new Date("2016-05-03T00:00:00Z"),
                "guestPk": "10001W",
                "level": "NEW",
                "name": "Barry, Lorraine",
                "package": "",
                "packageCode": "RACKRR",
                "packageName": "Rack Rate",
                "pk": "1000HZ",
                "roomNumber": "A1KM",
                "roomType": null
            },
            {
                "arrival": new Date("2016-03-04T00:00:00Z"),
                "depart": new Date("2016-03-09T00:00:00Z"),
                "guestPk": "10002F",
                "level": "NEW",
                "name": "Berg, Zelda",
                "package": "",
                "packageCode": "RACKRR",
                "packageName": "Rack Rate",
                "pk": "1000FO",
                "roomNumber": "A208",
                "roomType": "A1KL"
            },
            {
                "arrival": new Date("2016-03-04T00:00:00Z"),
                "depart": new Date("2016-03-08T00:00:00Z"),
                "guestPk": "100049",
                "level": "CNF",
                "name": "Bratcher, Max",
                "package": "",
                "packageCode": "RACKRR",
                "packageName": "Rack Rate",
                "pk": "1000FX",
                "roomNumber": "A204",
                "roomType": "A1KL"
            },
            {
                "arrival": new Date("2016-05-31T00:00:00Z"),
                "depart": new Date("2016-06-05T00:00:00Z"),
                "guestPk": "10004C",
                "level": "NEW",
                "name": "Butler, Daniel",
                "package": "",
                "packageCode": "STQRK",
                "packageName": "Desert Highlands QN RK",
                "pk": "1000AI",
                "roomNumber": "D102",
                "roomType": "D1QL"
            },
            {
                "arrival": new Date("2016-03-05T00:00:00Z"),
                "depart": new Date("2016-03-09T00:00:00Z"),
                "guestPk": "10004A",
                "level": "CNF",
                "name": "Butler, Trenton",
                "package": "",
                "packageCode": "RACKRR",
                "packageName": "Rack Rate",
                "pk": "1000FY",
                "roomNumber": "A110",
                "roomType": "A1QL"
            },
            {
                "arrival": new Date("2016-04-24T00:00:00Z"),
                "depart": new Date("2016-05-01T00:00:00Z"),
                "guestPk": "10004G",
                "level": "NEW",
                "name": "Campbell, Rick",
                "package": "",
                "packageCode": "STKRK",
                "packageName": "Desert Highlands King RK",
                "pk": "1000A0",
                "roomNumber": "D104",
                "roomType": "D1KL"
            },
            {
                "arrival": new Date("2016-03-05T00:00:00Z"),
                "depart": new Date("2016-03-08T00:00:00Z"),
                "guestPk": "100062",
                "level": "CNF",
                "name": "Castle, William",
                "package": "",
                "packageCode": "RACKRR",
                "packageName": "Rack Rate",
                "pk": "1000FW",
                "roomNumber": "A102",
                "roomType": "A1QL"
            },
            {
                "arrival": new Date("2016-03-04T00:00:00Z"),
                "depart": new Date("2016-03-10T00:00:00Z"),
                "guestPk": "100070",
                "level": "CNF",
                "name": "Dandrea, John",
                "package": "",
                "packageCode": "RACKRR",
                "packageName": "Rack Rate",
                "pk": "1000FR",
                "roomNumber": "A212",
                "roomType": "A1KL"
            },
            {
                "arrival": new Date("2016-03-04T00:00:00Z"),
                "depart": new Date("2016-03-07T00:00:00Z"),
                "guestPk": "10007F",
                "level": "NEW",
                "name": "Dean, Shirley",
                "package": "",
                "packageCode": "RACKRR",
                "packageName": "Rack Rate",
                "pk": "1000EI",
                "roomNumber": "B105",
                "roomType": "B1QM"
            },
            {
                "arrival": new Date("2016-06-15T00:00:00Z"),
                "depart": new Date("2016-06-22T00:00:00Z"),
                "guestPk": "10008O",
                "level": "NEW",
                "name": "Ells, Kenneth",
                "package": "",
                "packageCode": "STQRK",
                "packageName": "Desert Highlands QN RK",
                "pk": "1000B2",
                "roomNumber": "D102",
                "roomType": "D1QL"
            },
            {
                "arrival": new Date("2016-03-04T00:00:00Z"),
                "depart": new Date("2016-03-07T00:00:00Z"),
                "guestPk": "10008Z",
                "level": "NEW",
                "name": "Falgout, Thomas",
                "package": "",
                "packageCode": "RACKRR",
                "packageName": "Rack Rate",
                "pk": "1000FS",
                "roomNumber": "A202",
                "roomType": "A1KL"
            },
            {
                "arrival": new Date("2016-03-18T00:00:00Z"),
                "depart": new Date("2016-03-20T00:00:00Z"),
                "guestPk": "1000YJ",
                "level": "NEW",
                "name": "Franklin-Mayers Wedding",
                "package": "",
                "packageCode": "SPBILL",
                "packageName": "Rate in Special Billing",
                "pk": "1000GI",
                "roomNumber": "B1KM",
                "roomType": null
            },
            {
                "arrival": new Date("2016-03-18T00:00:00Z"),
                "depart": new Date("2016-03-20T00:00:00Z"),
                "guestPk": "1000YJ",
                "level": "NEW",
                "name": "Franklin-Mayers Wedding",
                "package": "",
                "packageCode": "SPBILL",
                "packageName": "Rate in Special Billing",
                "pk": "1000GJ",
                "roomNumber": "B1KM",
                "roomType": null
            },
            {
                "arrival": new Date("2016-03-18T00:00:00Z"),
                "depart": new Date("2016-03-20T00:00:00Z"),
                "guestPk": "1000YJ",
                "level": "NEW",
                "name": "Franklin-Mayers Wedding",
                "package": "",
                "packageCode": "SPBILL",
                "packageName": "Rate in Special Billing",
                "pk": "1000GK",
                "roomNumber": "B1KM",
                "roomType": null
            },
            {
                "arrival": new Date("2016-03-18T00:00:00Z"),
                "depart": new Date("2016-03-20T00:00:00Z"),
                "guestPk": "1000YJ",
                "level": "NEW",
                "name": "Franklin-Mayers Wedding",
                "package": "",
                "packageCode": "SPBILL",
                "packageName": "Rate in Special Billing",
                "pk": "1000GL",
                "roomNumber": "B1KM",
                "roomType": null
            },
            {
                "arrival": new Date("2016-04-25T00:00:00Z"),
                "depart": new Date("2016-04-27T00:00:00Z"),
                "guestPk": "1000AK",
                "level": "CNF",
                "name": "Garvey, Margaret",
                "package": "",
                "packageCode": "RACKRR",
                "packageName": "Rack Rate",
                "pk": "1000I3",
                "roomNumber": "A1QL",
                "roomType": null
            },
            {
                "arrival": new Date("2016-07-02T00:00:00Z"),
                "depart": new Date("2016-07-06T00:00:00Z"),
                "guestPk": "1000AK",
                "level": "NEW",
                "name": "Garvey, Margaret",
                "package": "",
                "packageCode": "PKGF01",
                "packageName": "Golf Escape Package",
                "pk": "1000I4",
                "roomNumber": "A1KM",
                "roomType": null
            },
            {
                "arrival": new Date("2016-03-04T00:00:00Z"),
                "depart": new Date("2016-03-12T00:00:00Z"),
                "guestPk": "1000DM",
                "level": "CNF",
                "name": "Hendrix, Michael",
                "package": "",
                "packageCode": "RACKRR",
                "packageName": "Rack Rate",
                "pk": "1000FQ",
                "roomNumber": "A210",
                "roomType": "A1KL"
            },
            {
                "arrival": new Date("2016-03-04T00:00:00Z"),
                "depart": new Date("2016-03-08T00:00:00Z"),
                "guestPk": "1000E8",
                "level": "NEW",
                "name": "Holst, Hazel",
                "package": "",
                "packageCode": "RACKRR",
                "packageName": "Rack Rate",
                "pk": "1000EN",
                "roomNumber": "D104",
                "roomType": "D1KL"
            },
            {
                "arrival": new Date("2016-04-16T00:00:00Z"),
                "depart": new Date("2016-04-21T00:00:00Z"),
                "guestPk": "1000E9",
                "level": "CNF",
                "name": "Honeycutt, Charles",
                "package": "",
                "packageCode": "PKGF01",
                "packageName": "Golf Escape Package",
                "pk": "1000JL",
                "roomNumber": "A1QL",
                "roomType": null
            },
            {
                "arrival": new Date("2016-03-12T00:00:00Z"),
                "depart": new Date("2016-03-13T00:00:00Z"),
                "guestPk": "1000F7",
                "level": "NEW",
                "name": "Jackson, Adam",
                "package": "",
                "packageCode": "RACKRR",
                "packageName": "Rack Rate",
                "pk": "1000IW",
                "roomNumber": "A1KL",
                "roomType": null
            },
            {
                "arrival": new Date("2016-03-04T00:00:00Z"),
                "depart": new Date("2016-03-10T00:00:00Z"),
                "guestPk": "1000GQ",
                "level": "NEW",
                "name": "King, Adam",
                "package": "",
                "packageCode": "RACKRR",
                "packageName": "Rack Rate",
                "pk": "1000EJ",
                "roomNumber": "D105",
                "roomType": "D1QL"
            },
            {
                "arrival": new Date("2016-04-30T00:00:00Z"),
                "depart": new Date("2016-05-02T00:00:00Z"),
                "guestPk": "1000GP",
                "level": "CNF",
                "name": "King, Marvis",
                "package": "",
                "packageCode": "STK10",
                "packageName": "Desert Highlands KG 10%",
                "pk": "1000I9",
                "roomNumber": "D1KL",
                "roomType": null
            },
            {
                "arrival": new Date("2016-06-28T00:00:00Z"),
                "depart": new Date("2016-06-30T00:00:00Z"),
                "guestPk": "1000GP",
                "level": "NEW",
                "name": "King, Marvis",
                "package": "",
                "packageCode": "PKGF01",
                "packageName": "Golf Escape Package",
                "pk": "1000IA",
                "roomNumber": "A1KM",
                "roomType": null
            },
            {
                "arrival": new Date("2016-06-01T00:00:00Z"),
                "depart": new Date("2016-06-03T00:00:00Z"),
                "guestPk": "1000GP",
                "level": "CNF",
                "name": "King, Marvis",
                "package": "",
                "packageCode": "PKGF01",
                "packageName": "Golf Escape Package",
                "pk": "1000IV",
                "roomNumber": "B1KM",
                "roomType": null
            },
            {
                "arrival": new Date("2016-04-10T00:00:00Z"),
                "depart": new Date("2016-04-15T00:00:00Z"),
                "guestPk": "1000J8",
                "level": "CNF",
                "name": "MacBride, Wanda",
                "package": "",
                "packageCode": "OWNER",
                "packageName": "Owner Reservation",
                "pk": "1000IK",
                "roomNumber": "D101",
                "roomType": "D1KL"
            },
            {
                "arrival": new Date("2016-05-26T00:00:00Z"),
                "depart": new Date("2016-05-31T00:00:00Z"),
                "guestPk": "1000J8",
                "level": "NEW",
                "name": "MacBride, Wanda",
                "package": "",
                "packageCode": "OWNER",
                "packageName": "Owner Reservation",
                "pk": "1000IL",
                "roomNumber": "D101",
                "roomType": "D1KL"
            },
            {
                "arrival": new Date("2016-03-04T00:00:00Z"),
                "depart": new Date("2016-03-09T00:00:00Z"),
                "guestPk": "1000KD",
                "level": "NEW",
                "name": "McGee, Vicki",
                "package": "",
                "packageCode": "RACKRR",
                "packageName": "Rack Rate",
                "pk": "1000EQ",
                "roomNumber": "B101S2",
                "roomType": "B2SM"
            },
            {
                "arrival": new Date("2016-04-05T00:00:00Z"),
                "depart": new Date("2016-04-11T00:00:00Z"),
                "guestPk": "1000NA",
                "level": "CNF",
                "name": "Park, Amanda",
                "package": "",
                "packageCode": "OWNER",
                "packageName": "Owner Reservation",
                "pk": "1000IP",
                "roomNumber": "D110",
                "roomType": "D1QL"
            },
            {
                "arrival": new Date("2016-05-30T00:00:00Z"),
                "depart": new Date("2016-06-03T00:00:00Z"),
                "guestPk": "1000NA",
                "level": "NEW",
                "name": "Park, Amanda",
                "package": "",
                "packageCode": "OWNER",
                "packageName": "Owner Reservation",
                "pk": "1000IQ",
                "roomNumber": "D110",
                "roomType": "D1QL"
            },
            {
                "arrival": new Date("2016-03-22T00:00:00Z"),
                "depart": new Date("2016-03-24T00:00:00Z"),
                "guestPk": "1000TV",
                "level": "NEW",
                "name": "Tanner, Donald",
                "package": "",
                "packageCode": "RACKRR",
                "packageName": "Rack Rate",
                "pk": "100015",
                "roomNumber": "B115",
                "roomType": "B1QM"
            },
            {
                "arrival": new Date("2016-04-02T00:00:00Z"),
                "depart": new Date("2016-04-08T00:00:00Z"),
                "guestPk": "1000UM",
                "level": "NEW",
                "name": "Thornton, Joseph",
                "package": "",
                "packageCode": "STKRK",
                "packageName": "Desert Highlands King RK",
                "pk": "1000CJ",
                "roomNumber": "D101",
                "roomType": "D1KL"
            },
            {
                "arrival": new Date("2016-03-05T00:00:00Z"),
                "depart": new Date("2016-03-10T00:00:00Z"),
                "guestPk": "1000UM",
                "level": "CNF",
                "name": "Thornton, Joseph",
                "package": "",
                "packageCode": "RACKRR",
                "packageName": "Rack Rate",
                "pk": "1000ER",
                "roomNumber": "B102",
                "roomType": "B1KM"
            },
            {
                "arrival": new Date("2016-03-04T00:00:00Z"),
                "depart": new Date("2016-03-10T00:00:00Z"),
                "guestPk": "1000XS",
                "level": "CNF",
                "name": "Wynn, Barbara",
                "package": "",
                "packageCode": "RACKRR",
                "packageName": "Rack Rate",
                "pk": "1000EL",
                "roomNumber": "B104",
                "roomType": "B1QM"
            }
        ]

        constructor(testRowSource:ITestRowSource) {
            if (testRowSource) {
                this.guests = testRowSource.getGuests();
                this.reservations = testRowSource.getReservations();
            }
        }
        
        getGuests(request: GuestRequest): Observable<Guest[]> {
        let gs: Guest[] = this.guests.filter((g: Guest) => {
            if ((request.pk) && (g.pk === request.pk)) {
                return true;
            }
            if (request.name) 
            {
                return g.lastName.toLowerCase().startsWith(request.name.toLowerCase()); 
            } 
            if ((request.emailAddress) && (g.emailAddress.toLowerCase() === request.emailAddress.toLowerCase())) {
                return true;
            }
            if ((request.phoneNumber) && (g.phoneNumber === request.phoneNumber)) {
                return true;
            }

            return false;
    });
        return of(gs);
    }

getReservations(request: ReservationRequest): Observable < Reservation[] > {
    let reservations: Reservation[] = [];
    return of(reservations);
}

}