export class Guest {
    pk: string;
    title:string;
    lastName: string;
    firstName: string;
    phoneNumber: string;
    emailAddress: string;
    company:string;
    address:string;
    city:string;
    state:string;
    zip:string;
    country:string;


    get properName(): string {
        if (!this.lastName && !this.firstName)
            return "";
        let name: string = "";
        name = !this.title ? "" : this.title.trim();
        if (this.firstName)
            name = name + " " + this.firstName.trim();
            if (this.lastName)
            name = name + " " + this.lastName.trim();
        return name;
    }
}