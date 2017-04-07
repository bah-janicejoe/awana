import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

//Bootstraped Components

//services


//Test Data imports
import {InMemoryWebApiModule} from "angular-in-memory-web-api";

//Route Components
import {RouteModule} from "./router.module";


//Directives


@NgModule({
  imports:      [
    BrowserModule,
    RouteModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  declarations: [

  ],
  providers:[

  ],
  bootstrap:    [
  
  ]
})

export class AppModule {
}
