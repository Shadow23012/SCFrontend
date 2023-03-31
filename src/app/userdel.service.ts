import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdelService {

  private apiUrl = 'http://localhost:5000/users';

  constructor(private http: HttpClient) { }

  deleteUser(correo: string): Observable<any> {
    const url = `${this.apiUrl}/${correo}`;
    return this.http.delete(url);
  }

}
