import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  num = 1
  id:any
  detailsProduct:any
  constructor(private _details:ProductService , private _active:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._active.snapshot.params['id']
    this._details.getProductsById(this.id).subscribe(details => {
      this.detailsProduct = details
      console.log( this.detailsProduct);
      
    })
  }
  addAmount(){
    this.num++
  }
  removeAmount(){
    
    if (this.num == 0) {
      this.num = 0
    }else{
      this.num--
    }
  }
}
