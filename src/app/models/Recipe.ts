import Payment from "./Payment";
import Type from "./Type";

export interface Product {
  name: String ;
  price: number;
}

export interface Item {
  product: Product;
  quantity: number;
}

export default interface Recipe {
  id: String;
  dateTime: Date;
  payment: Payment;
  type: Type;
  totalPrice: number;
  totalQuantity: number;
  items: Item[];
}

