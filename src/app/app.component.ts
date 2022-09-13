import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from './modules/products/interfaces/product';
import { ProductService } from './modules/products/services/product.service';
import { LoaderService } from './modules/shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'store';
  constructor( public _loader:LoaderService){}
}
