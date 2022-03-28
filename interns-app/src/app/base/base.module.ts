import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternComponent } from './intern/intern.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule} from '@angular/material/select'
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { InternService } from './services/intern.service';
import { HttpClientModule } from '@angular/common/http';
import { AddInternComponent } from './add-intern/add-intern.component';
import { ToolsComponent } from './tools/tools.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { SortComponent } from './sort/sort.component';



@NgModule({
  declarations: [
    InternComponent,
    AddInternComponent,
    ToolsComponent,
    HomeComponent,
    SortComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    AppRoutingModule,
    MatSelectModule
  ],
  exports:[
    //components to export to app.module
    InternComponent,
    HomeComponent,
    AddInternComponent,
    SortComponent,
    ToolsComponent
  ],
  providers:[InternService]
})
export class BaseModule { }
