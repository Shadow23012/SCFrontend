import { Injectable } from "@angular/core";
import { Product } from "./products";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: "root",
})


export class DatabaseService {


  //URL para consumir los productos
  baseUrl = "http://localhost:5000/products";
  items: Product[] = []; //Productos vacíos iniciando
 
  constructor(private http: HttpClient) {}


  // GET
  getItems(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  //Add
   addProduct(product: any): Observable<any> {
    let p = {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      images: product.images[0]
    }
    return this.http.post(this.baseUrl, p);
  }

  //Delete
  /*deleteProduct(id: string): Observable<any> {
    try {
      return this.http.delete<Product>(this.baseUrl + "/" + id);
    } catch (error) {
      return this.http.delete<Product>(this.baseUrl + "/" + id);
    }
  }

  //Edit

*/
}


