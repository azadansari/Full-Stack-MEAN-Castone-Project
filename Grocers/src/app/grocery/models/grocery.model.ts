import { PriceModel } from "./price.model";

export interface GroceryModel{
  id: number,
  image: string,
  name: string,
  quantity: number,
  price: PriceModel
}
