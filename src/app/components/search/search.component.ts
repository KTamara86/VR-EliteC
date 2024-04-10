import { Component, HostListener } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  expression = ""

  constructor(private search: SearchService) {
    this.search.getClear().subscribe(clearing => {
      if (clearing) {
        this.expression = '';
        this.onKeyUp(this.expression);
      }
    });
  }

  onKeyUp(value:string) {
    this.expression = value
    this.search.setSearchTerm(value)
  }
}