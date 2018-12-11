import { Component, OnInit, OnDestroy } from '@angular/core';
import {Location} from "@angular/common";
import {SharingDataService} from "../services/sharing-data.service";

@Component({
  selector: 'app-detail-list',
  templateUrl: './detail-list.component.html',
  styleUrls: ['./detail-list.component.css']
})
export class DetailListComponent implements OnInit, OnDestroy {
  item: any;
  constructor(private location: Location, private shareddata: SharingDataService) {
    if (localStorage.hasOwnProperty('selecteddata')) {
    this.item = localStorage.getItem('selecteddata');
    }
  }

  ngOnInit() {
    this.item = this.shareddata.getDataItem();
    localStorage.setItem('selecteddata', this.item);
  }
  goBack(): void {
    this.location.back();
  }
  ngOnDestroy() {
    localStorage.removeItem('selecteddata');
  }
}
