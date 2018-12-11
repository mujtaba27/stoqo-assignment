import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {
  constructor() {}

  setDataItem(data) {
    localStorage.setItem("item", JSON.stringify(data));
  }
  getDataItem() {
    if (localStorage.hasOwnProperty("item")) {
      return (JSON.parse(localStorage.getItem('item')));
    } else {
      return {"item": null};
    }
  }
}
