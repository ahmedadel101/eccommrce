import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsCategoryComponent } from './components/products-category/products-category.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

const routes: Routes = [

  {path:'' , component:ProductsListComponent},
  {path:'products/:id' , component:ProductDetailsComponent},
  {path:'add-product' , component:AddProductComponent},
  {path:'product-category/:category' , component:ProductsCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
