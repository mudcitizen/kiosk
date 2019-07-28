import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css']
})
export class FinderComponent implements OnInit {

  protected readonly nameSearchType:string = "Name";
  protected readonly emailSearchType:string = "Email";
  protected readonly phoneSearchType:string = "Phone #";
  protected readonly pkSearchType:string = "Reservation #:"
  readonly searchTypes:String[] = [this.nameSearchType,this.pkSearchType,this.emailSearchType,this.phoneSearchType];

  searchType:string; // = this.nameSearchType;
  searchValue:string;
  
  ngOnInit() {
  }

  search() : void {
    console.log(`FinderComponent.Search() : Type - ${this.searchType} ; Value - ${this.searchValue}`);
  }

}
