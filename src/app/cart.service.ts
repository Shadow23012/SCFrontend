import { HttpClient } from '@angular/common/http';
import { CartProduct, Product } from './products';
import { Injectable } from '@angular/core';
/* . . . */
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: CartProduct[] = [];
  total: number = 0;


/* . . . */

  addToCart(product: Product) {
    let p = {
      id:product.id,
      name:product.name,
      price:product.price,
      description:product.description,
      quantity: 1
    }
    this.items.push(p);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor(
    private http: HttpClient
  ) {}

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  //Total de compra en carrito de compra.
  setTotal(total:number) {
    this.total = total;
  }


  //Obtener el total de la compra
  getTotal() {
    return this.total;
  }
  
/* . . . */
}