import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main-components/home/home.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'products-list' , loadChildren:() => import('./modules/products/products.module').then(m => m.ProductsModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
