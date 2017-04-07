import { NgModule }      from '@angular/core';
import {RouterModule, Routes} from "@angular/router";



const appRoutes: Routes = [
  {
    path:"",
    pathMatch:"full"
  },{
    path:"user/new"
  },{
    path:"user/:id"
  }
];

@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})

export class RouteModule{}
