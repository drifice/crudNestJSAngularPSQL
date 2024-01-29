import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/user.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  addUser(myUser:IUser): Observable<any> {
    return this.http.post<any>('http://localhost:3000/user',myUser)
      .pipe(
        tap(data => {
          console.log("add User :", data);
        })
      );
  }
}
