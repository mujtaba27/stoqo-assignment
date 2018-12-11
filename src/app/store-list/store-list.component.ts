import { Component, OnInit, OnDestroy } from '@angular/core';
import {AuthServiceService} from "../services/auth-service.service";
import {StoreListService} from "../services/store-list.service";
import {Router} from "@angular/router";
import {first} from "rxjs/internal/operators";
import {SharingDataService} from "../services/sharing-data.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit, OnDestroy {
  currentUserSubscription: Subscription;
  currentUser: any;
  data: any;
  searchString: any;
  constructor(
    private auth: AuthServiceService, private router: Router,
    private storelist: StoreListService, private shreddata: SharingDataService
  ) {
    this.currentUserSubscription = this.auth.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  ngOnDestroy() {
    this.currentUserSubscription.unsubscribe();
  }

  private loadAllUsers() {
    this.storelist.getAll().pipe(first()).subscribe(users => {
      this.data = users;
      if (this.data.results) {
      this.data = this.data.results;
      }
    });
  }

  routingtodetail(item) {
    this.shreddata.setDataItem(item);
    this.router.navigate(['detail']);
  }
}
