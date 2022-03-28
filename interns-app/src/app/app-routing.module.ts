import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInternComponent } from './base/add-intern/add-intern.component';
import { HomeComponent } from './base/home/home.component';
import { InternComponent } from './base/intern/intern.component';

const routes: Routes = [
  {path: "", component:HomeComponent, pathMatch:"full"},
  {path: "add-intern", component: AddInternComponent},
  { path: "add-intern/:id", component: AddInternComponent},
  
  {path: "**", redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
