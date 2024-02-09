import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/user.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  addUser(myUser: IUser): Observable<any> {
    return this.http.post('http://localhost:3000/api/users', myUser);
  }

  getAllUSer(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/users');
  }

  delete(id: any): Observable<any> {
    return this.http.delete('http://localhost:3000/api/users/' + id);
  }
}
