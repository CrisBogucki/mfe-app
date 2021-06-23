import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LApp1RoutingModule } from './l-app1-routing.module';
import {HomeComponent} from "./home/home.component";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    LApp1RoutingModule
  ]
})
export class LApp1Module { }
