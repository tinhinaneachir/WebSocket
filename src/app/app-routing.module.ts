import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MessagesComponent} from "./messages/messages.component";


const routes: Routes = [
  /*{
    path: '/topic/demo' ,
    component: MessagesComponent,
  },*/
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),CommonModule
  ]
})
export class AppRoutingModule {
}
