import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data/service/data.service';
import { Guest } from 'src/app/data/models/guest.model';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.css']
})
export class GuestsComponent implements OnInit {

  guests:Guest[];

  constructor(private dataSerivce:DataService) {
    this.guests = dataSerivce.getGuests();
   }

  ngOnInit() {
  }

}
