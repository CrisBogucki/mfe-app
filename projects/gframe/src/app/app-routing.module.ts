import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {buildRoutes} from "./utils/route-utils";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(buildRoutes())],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
