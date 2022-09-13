import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsRoutingModule } from '../products/products-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [
    TopHeaderComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductsRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule

  ],
  exports:[
    TopHeaderComponent,
    NavbarComponent,
    HttpClientModule,
    ProductsRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule

  ]
})
export class SharedModule { }
