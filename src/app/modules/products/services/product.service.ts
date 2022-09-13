import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http:HttpClient) { }

  getAllProducts():Observable<any>{
    return this._http.get(`${environment.apiUrl}products`)
  }
  getProductsById(id:any):Observable<any>{
    return this._http.get(`${environment.apiUrl}products/${id}`)
  }
  addProducts(data:any):Observable<any>{
    return this._http.post(`${environment.apiUrl}products` , data)
  }
  getProductByCat(cat:any):Observable<any>{
    return this._http.get(`${environment.apiUrl}products/category/${cat}`)
  }
  
}
