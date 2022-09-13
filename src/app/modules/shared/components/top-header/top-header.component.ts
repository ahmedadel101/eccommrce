import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {
  cartLength: any;

  constructor(private _cart:CartService) { }

  ngOnInit(): void {
    this._cart.getCollectCart().subscribe({
      next:(res)=>{
          this.cartLength = res.length
      }
    })
  }

}
