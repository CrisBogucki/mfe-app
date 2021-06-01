import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "projects/l-micro-app1/src/app/l-micro-app1/home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'l-micro-app1',
    loadChildren: () => import('./l-micro-app1/l-micro-app1.module').then((m)=> m.LMicroApp1Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
