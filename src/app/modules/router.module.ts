import { NgModule }      from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {SettingsComponent} from "components:settings/settings.component";

const appRoutes: Routes = [
  {
    path:"",
    pathMatch:"full",
  },{
    path:"class/:id"
  },{
    path:"settings",
    component:SettingsComponent
  }
];

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})

export class RouteModule{}
