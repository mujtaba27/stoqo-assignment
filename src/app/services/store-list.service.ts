import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class StoreListService {

  constructor(private http: HttpClient) {}
    getAll() {
      return this.http.get(environment.API_URL + 'stores/');
    }
}
