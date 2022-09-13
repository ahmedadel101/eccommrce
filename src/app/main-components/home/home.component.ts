import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/modules/shared/models/categoriesData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories = Categories
  constructor() { }

  ngOnInit(): void {
  }

}
