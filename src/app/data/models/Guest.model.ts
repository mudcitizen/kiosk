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

    constructor() {
        this.pk = "";
        this.title="";
        this.lastName= "" ;
        this.firstName ="";
        this.phoneNumber ="";
        this.emailAddress ="";
        this.company="";
        this.address="";
        this.city="";
        this.state="";
        this.zip="";
        this.country="";
    }

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