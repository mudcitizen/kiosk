import { Component, OnInit, Inject } from '@angular/core';
import { IDataProvider } from "../../data/providers/idata.provider";
import { Injection_Token_DataProvider } from "../../common/constants";
import { DataService } from 'src/app/data/service/data.service';
import { ReservationRequest } from 'src/app/data/requests/reservation.request';
import { Reservation } from 'src/app/data/models/reservation.model';
import { GuestRequest } from 'src/app/data/requests/guest.request';
import { Router } from '@angular/router';
import { GuestData } from 'src/app/data/models/guest.data';
@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})

export class FinderComponent implements OnInit {

  private readonly nameSearchType: string = "Name";
  private readonly emailSearchType: string = "Email";
  private readonly phoneSearchType: string = "Phone #";
  private readonly pkSearchType: string = "Reservation #:"
  readonly searchTypes: String[] = [this.nameSearchType, this.pkSearchType, this.emailSearchType, this.phoneSearchType];

  searchType: string; // = this.nameSearchType;
  searchValue: string;

  constructor(@Inject(Injection_Token_DataProvider) private dataProvider: IDataProvider, 
  private dataService: DataService,
  private router:Router) { }

  ngOnInit() {
  }

  search(): void {
    this.dataService.clear();
    if (this.searchType === this.pkSearchType) {
      let request: ReservationRequest = new ReservationRequest();
      request.pk = this.searchValue;
      this.dataProvider.getReservations(request).subscribe((data: Reservation[]) => {
        switch (data.length) {
          case 0:
            //TODO Handle Res Pk not found
            break;
          case 1:
            //TODO Handle launch Res component
            break;
          default:
            //TODO Handle launch ResList component
            break;
        }
      })

    }
    else {
      let request: GuestRequest = new GuestRequest()
      switch (this.searchType) {
        case (this.nameSearchType):
          request.name = this.searchValue;
          break;
        case (this.emailSearchType):
          request.emailAddress = this.searchValue;
          break;
        case (this.phoneSearchType):
          request.phoneNumber = this.searchValue;
          break;
      }

      this.dataProvider.getGuests(request).subscribe((data: GuestData[]) => {
        switch (data.length) {
          case 0:
            // TODO Handle Guest Not Found
            break;
          case 1:
            // TODO Handle Guest Component
            this.dataService.setGuest(data[0]);
            this.router.navigate(['guest']);
            break;
          default:
            // TODO Handle Guest List
            this.dataService.setGuests(data);
            this.router.navigate(['guests']);
            break;
        }

      })

    }
    console.log(`FinderComponent.Search() : Type - ${this.searchType} ; Value - ${this.searchValue}`);
  }

}
