import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinderComponent } from './components/finder/finder.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import {StaticDataProvider} from "./data/providers/static.provider"
import { Injection_Token_DataProvider} from "./common/constants"


@NgModule({
  declarations: [
    AppComponent,
    FinderComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{ provide: Injection_Token_DataProvider, useValue :new StaticDataProvider(null)}],
  bootstrap: [AppComponent]
})
export class AppModule { }
