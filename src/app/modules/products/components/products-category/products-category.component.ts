import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/modules/shared/services/cart.service';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.scss']
})
export class ProductsCategoryComponent implements OnInit {
  id:any
  Products: Product[]=[];
  constructor(private _Cat:ProductService , private _active:ActivatedRoute , private _cart:CartService) { }

  ngOnInit(): void {
    this.id = this._active.snapshot.params['category']
    this._Cat.getProductByCat(this.id).subscribe(category => {
      this.Products = category
    })
  }
  addCart(data:any){
    this._cart.addToCart(data)
  }

}
