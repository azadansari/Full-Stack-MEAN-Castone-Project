import { Injectable } from '@angular/core';
import { GroceryModel } from '../models/grocery.model';

@Injectable()
export class GroceryService {

  constructor() { }

  public getGrocery(): GroceryModel[]{
    return [
      {
        "id": 1,
        "image": "../../assets/images/products/Legumes.jpg",
        "name": "Legumes",
        "quantity": 1,
        "price":{
          "currency": "Rs",
          "value": 15
        }
      },
      {
        "id": 2,
        "image": "../../assets/images/products/cucumbers.jpg",
        "name": "Cucumbers",
        "quantity": 1,
        "price":{
          "currency": "Rs",
          "value": 10
        }
      },
      {
        "id": 3,
        "image": "../../assets/images/products/Cabbage.jpg",
        "name": "Cabbage",
        "quantity": 1,
        "price":{
          "currency": "Rs",
          "value": 15
        }
      },
      {
        "id": 4,
        "image": "../../assets/images/products/Tomatoes.jpg",
        "name": "Tomatoes",
        "quantity": 1,
        "price":{
          "currency": "Rs",
          "value": 20
        }
      },
      {
        "id": 5,
        "image": "../../assets/images/products/Peppers.jpg",
        "name": "Peppers",
        "quantity": 1,
        "price":{
          "currency": "Rs",
          "value": 18
        }
      },
      {
        "id": 6,
        "image": "../../assets/images/products/Onion.jpg",
        "name": "Onion",
        "quantity": 1,
        "price":{
          "currency": "Rs",
          "value": 25
        }
      },
      {
        "id": 6,
        "image": "../../assets/images/products/Salad.jpg",
        "name": "Salad",
        "quantity": 1,
        "price":{
          "currency": "Rs",
          "value": 25
        }
      },
      {
        "id": 6,
        "image": "../../assets/images/products/Strawberry.jpg",
        "name": "Strawberry",
        "quantity": 1,
        "price":{
          "currency": "Rs",
          "value": 25
        }
      },
      {
        "id": 6,
        "image": "../../assets/images/products/Blackberry.jpg",
        "name": "Blackberry",
        "quantity": 1,
        "price":{
          "currency": "Rs",
          "value": 25
        }
      },
      {
        "id": 6,
        "image": "../../assets/images/products/Raspberries.jpg",
        "name": "Raspberries",
        "quantity": 1,
        "price":{
          "currency": "Rs",
          "value": 25
        }
      },
      {
        "id": 6,
        "image": "../../assets/images/products/Broccoli.jpg",
        "name": "Broccoli",
        "quantity": 1,
        "price":{
          "currency": "Rs",
          "value": 25
        }
      }
    ]

  }
}
