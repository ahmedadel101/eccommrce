import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsRoutingModule } from '../products/products-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    TopHeaderComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductsRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatProgressBarModule

  ],
  exports:[
    TopHeaderComponent,
    NavbarComponent,
    HttpClientModule,
    ProductsRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatProgressBarModule,
    FooterComponent

  ]
})
export class SharedModule { }
