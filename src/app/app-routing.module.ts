import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatListComponent} from './pages/cat-list/cat-list.component';
import { NewcatComponent } from './pages/newcat/newcat.component';
import {DetailComponent} from './pages/detail/detail.component';



const routes: Routes = [
  {path: "detail/:id", component:DetailComponent},
  {path: "cat-list", component: CatListComponent}, 
  {path: "newcat",component: NewcatComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





