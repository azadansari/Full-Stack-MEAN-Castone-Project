import { Component, OnInit } from '@angular/core';
import { GroceryModel } from '../grocery/models/grocery.model';
import { GroceryService } from '../grocery/services/grocery.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [GroceryService]
})
export class ProductsComponent implements OnInit {

  p: number = 1;
  itemsPerPage: number = 8;
  totalProduct:any;

  public groceries: GroceryModel[] = [];

  constructor(public groceryService: GroceryService) { }

  ngOnInit(): void {
    this.groceries = this.groceryService.getGrocery();
    this.totalProduct = this.groceries.length;
  }

}
