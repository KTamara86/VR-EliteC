import { Component } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  expression = ""

  constructor(private search:SearchService) { }

  ngOnInit() {
  }

  onKeyUp(value:string) {
    this.expression = value
    this.search.setSearchTerm(value)
  }
}
