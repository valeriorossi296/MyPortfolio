import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {FurnitureComponent} from './furniture/furniture.component';
import {PictureCardListComponent} from './picture-card/picture-card-list/picture-card-list.component';
const routes: Routes = [
  {
    path: "",
    component: HomeComponent,data: {animation: 'Home'}
  },
  {
    path: "pictures",
    component: PictureCardListComponent,data: {animation: 'Slots'}
  },
  
  {
    path: "furnitures",
    component: FurnitureComponent
  },
  // {
  //   path: "slots",
  //   component: SlotsComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
