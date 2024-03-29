import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchTerm = ""
  searchTermSub = new BehaviorSubject("")

  constructor() { }

  getSearchTerm() {
    return this.searchTermSub
  }

  setSearchTerm(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.searchTermSub.next(this.searchTerm)
  }
}
