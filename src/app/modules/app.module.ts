import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

//Bootstraped Components
import {ContentComponent} from "../components/content.component";

//services

//Test Data imports
import {InMemoryWebApiModule} from "angular-in-memory-web-api";

//Route Components
import {RouteModule} from "./router.module";
import {SettingsComponent} from "../components/settings/settings.component";


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
    ContentComponent,
    SettingsComponent
  ],
  providers:[

  ],
  bootstrap:    [
    ContentComponent
  ]
})

export class AppModule {
}
