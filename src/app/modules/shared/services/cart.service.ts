import { Injectable } from '@angular/core';
import { BehaviorSubject , Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
collect:BehaviorSubject<any> = new BehaviorSubject<any>([])
constructor() { }
cartArray:any[]=[]
getCollectCart():Observable<any>{
 return this.collect.asObservable()
}

addToCart(data:any){
  this.cartArray.push(data)
  this.collect.next(this.cartArray)
}
}
