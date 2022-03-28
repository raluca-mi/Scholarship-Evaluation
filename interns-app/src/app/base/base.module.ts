import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternComponent } from './intern/intern.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from "@angular/material/card";
import {MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { InternService } from './services/intern.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [
    InternComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    HttpClientModule
  ],
  exports:[
    //components to export to app.module
    InternComponent
  ],
  providers:[InternService]
})
export class BaseModule { }
