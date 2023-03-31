import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "@auth0/auth0-angular";


@Injectable({
  providedIn: "root",
})


export class UserdatabaseService {


  //URL para consumir los usuarios
  baseUrl = "http://localhost:5000/users";
  Users: User[] = []; //Usuarios vacíos iniciando
 
  constructor(private http: HttpClient) {}


  // GET
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  //Add
   addUser(user: any): Observable<any> {
    let p = {
      correo: user.correo,
      username: user.username,
      password: user.password
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

