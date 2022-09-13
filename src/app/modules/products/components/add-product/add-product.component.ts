import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categories } from 'src/app/modules/shared/models/categoriesData';
import Swal from 'sweetalert2';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  addProductForm: any = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    category: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    image: new FormControl(null, [Validators.required]),
  })
  constructor(private _addProduct:ProductService , private _router:Router) { }
  categories = Categories
  ngOnInit(): void {
  }
  addProduct(data:any){
    if (this.addProductForm.invalid) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Error',
        showConfirmButton: false,
        timer: 3000
      })
    }else{
      this._addProduct.addProducts(this.addProductForm.value).subscribe( {
        next:(res) => {
          if (res) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Created',
              showConfirmButton: false,
              timer: 3000
            }).then((result) => {
              if (result) {
                this._router.navigate(['/'])
              }
            })
          }
        }
      ,error:(error:any)  => {
        if (error) {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Error',
            showConfirmButton: false,
            timer: 3000
          })
        }
      }})
    }


  }

}
