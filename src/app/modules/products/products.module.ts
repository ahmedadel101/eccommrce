import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { StarRatingModule } from 'angular-star-rating';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AddProductComponent,
    ProductsListComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StarRatingModule.forRoot(),
    SharedModule
  ]
})
export class ProductsModule { }
