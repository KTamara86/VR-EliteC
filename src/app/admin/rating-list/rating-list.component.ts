import { Component } from '@angular/core';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-rating-list',
  templateUrl: './rating-list.component.html',
  styleUrls: ['./rating-list.component.css']
})
export class RatingListComponent {

  ratingsArray:any

  constructor(private ratingService:RatingService){
    ratingService.getRatings().subscribe(
      (res:any) => {
        let array = []
        for(const key in res){
          array.push(res[key])
        }
        this.ratingsArray = array 
      }
    )
  }

  ngOnInit(){
    this.ratingService.reload()
  }

  modifyRating(){
    let text = "CENZÚRÁZOTT VÉLEMÉNY: A vélemény kívül esett a jó ízlés határain"
    console.log(text)
  }

}
