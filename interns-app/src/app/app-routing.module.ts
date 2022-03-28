import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInternComponent } from './base/add-intern/add-intern.component';
import { HomeComponent } from './base/home/home.component';

const routes: Routes = [
  {path: "", component:HomeComponent, pathMatch:"full"},
  {path: "add-intern", component: AddInternComponent},

  {path: "**", redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
