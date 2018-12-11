import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {RegUser} from "../modalData/regUser";

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  constructor(private http: HttpClient) { }
  register(user: RegUser) {
    return this.http.post(environment.API_URL + 'signup/', user);
  }
}
