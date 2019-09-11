import { Component, OnInit } from '@angular/core';
import { GuestData} from "./data/models/Guest.data";
import { Guest} from "./data/models/Guest.model";
import 'automapper-ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//automapper.createMap(GuestData,Guest);
export class AppComponent implements OnInit {
  title = 'Kiosk';
  ngOnInit() {
    automapper.createMap(GuestData,Guest);
  }
}
