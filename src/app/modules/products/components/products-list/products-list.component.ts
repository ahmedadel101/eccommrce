import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit , OnDestroy {
  category:any[] = [
    {name:`All Categories` , cantegoryName:`all`},
    {Name:`Clothes` , subCategory:[{name:`Men's clothing` , cantegoryName:`men's clothing`},
    {name:`Women's clothing
    ` , cantegoryName:`women's clothing
    `}] },
    {name:`Electronics` , cantegoryName:`electronics`},
    {name:`Jewelery` , cantegoryName:`jewelery`}
  ]
  Products:Product[] = []
  unSubscribe!:Subscription
  constructor(private _product:ProductService){}
  ngOnInit(): void {
   
  this.unSubscribe =  this._product.getAllProducts().subscribe(res => {
      next:{
        this.Products = res
        console.log(res);
        
      }
    })
  }
  setCategory(cat:any){
    if (cat == 'all') {
      this._product.getAllProducts().subscribe(res => {
        next:{
          this.Products = res
          console.log(res);
          
        }
      })
    }else{
      this._product.getProductByCat(cat).subscribe(category => {
        this.Products = category
      })
    }
   
  }
  ngOnDestroy(): void {
  this.unSubscribe.unsubscribe()
  }
}