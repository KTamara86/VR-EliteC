import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchTerm = ""
  searchTermSub = new BehaviorSubject("")
  clearing = false
  clearingSub = new BehaviorSubject(this.clearing)

  constructor() { }

  getSearchTerm() {
    return this.searchTermSub
  }

  setSearchTerm(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.searchTermSub.next(this.searchTerm)
  }

  clearTerm(){
    this.clearing = true
    this.clearingSub.next(this.clearing)
    this.clearing = false
    this.clearingSub.next(this.clearing)
  }

  getClear(){
    return this.clearingSub
  }
}
