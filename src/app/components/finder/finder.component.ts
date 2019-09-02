import { Component, OnInit, Inject } from '@angular/core';
import { IDataProvider } from "../../data/providers/idata.provider";
import {Injection_Token_DataProvider} from "../../common/constants";
import { DataService } from 'src/app/data/service/data.service';
@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})

export class FinderComponent implements OnInit {

  private readonly nameSearchType:string = "Name";
  private readonly emailSearchType:string = "Email";
  private readonly phoneSearchType:string = "Phone #";
  private readonly pkSearchType:string = "Reservation #:"
  readonly searchTypes:String[] = [this.nameSearchType,this.pkSearchType,this.emailSearchType,this.phoneSearchType];

  searchType:string; // = this.nameSearchType;
  searchValue:string;
  
  constructor(@Inject(Injection_Token_DataProvider) private dataProvider:IDataProvider, private dataServer:DataService) {}

  ngOnInit() {
  }

  search() : void {
    console.log(`FinderComponent.Search() : Type - ${this.searchType} ; Value - ${this.searchValue}`);
  }

}
