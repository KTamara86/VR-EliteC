import { Component } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  expression = ""
  clearing = false

  constructor(private search:SearchService) {
    this.search.getClear().subscribe(
      (res) => {
        this.clearing = res
        if(this.clearing){
          this.expression = ""
          this.onKeyUp(this.expression)
        }
      }
    )
   }

  ngOnInit() {
  }

  onKeyUp(value:string) {
    this.expression = value
    this.search.setSearchTerm(value)
  }
}
