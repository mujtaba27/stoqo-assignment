import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import {User} from "../modalData/user";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  login(user) {
    return this.http.post<any>( environment.API_URL + 'login/', { 'username': user.username, 'password': user.password })
      .pipe(map(users => {
        if (users && users.token) {
          localStorage.setItem('currentUser', JSON.stringify(users.token));
          this.currentUserSubject.next(users.token);
        }

        return users.token;
      }));
  }
  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('selecteddata');
    this.currentUserSubject.next(null);
  }
}

