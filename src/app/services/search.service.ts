import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchTermSub = new BehaviorSubject("")
  clearingSub = new BehaviorSubject(false)

  constructor() { }

  getSearchTerm() {
    return this.searchTermSub
  }

  setSearchTerm(searchTerm: string) {
    this.searchTermSub.next(searchTerm)
  }

  clearTerm(){
    this.clearingSub.next(true)
    this.clearingSub.next(false)
  }

  getClear(){
    return this.clearingSub
  }
}
