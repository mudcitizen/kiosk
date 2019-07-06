export class Reservation {
    pk: string;
    guestPk:string;
    arrival: Date;
    depart: Date;
    level: string;
    name: string;
    packageCode: string;
    packageName: string;
    roomNumber: string;
    roomType: string;
    
    get package(): string {
        if (this.packageCode && this.packageName)
            return this.packageCode.trim() + " - " + this.packageName.trim();
        if (this.packageCode && !this.packageName)
            return this.packageCode.trim();
        if (!this.packageCode && this.packageName)
            return this.packageName.trim();
        if (!this.packageCode && !this.packageName)
            return "";
    }
    
}