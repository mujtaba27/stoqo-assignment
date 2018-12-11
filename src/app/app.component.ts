import { Component } from '@angular/core';
import {AuthServiceService} from "./services/auth-service.service";
import {Router} from "@angular/router";
import {User} from "./modalData/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: User;
  data: any;
  constructor(
    private router: Router,
    private auth: AuthServiceService
  ) {
    this.auth.currentUser.subscribe(x => this.currentUser = x);
    this.data = this.auth.currentUserValue;
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
  gettokenval() {
      if (this.router.url === '/login') {
        return true;
      } else {
        if (localStorage.getItem('currentUser')) {
          return true;
        } else {
          this.router.navigate(['/login']);
        }
      }
    }
}
