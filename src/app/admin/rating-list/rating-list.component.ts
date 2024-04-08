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
          let element = res[key]
          element.key = key
          array.push(element)
        }
        this.ratingsArray = array 
      }
    )
  }

  ngOnInit(){
    this.ratingService.reload()
  }

  modifyRating(rating:any){
    let text = "CENZÚRÁZOTT VÉLEMÉNY: A vélemény kívül esett a jó ízlés határain"
    let body = {
      product: rating.product,
      rating: rating.rating,
      text: text,
      time: rating.time,
      user: rating.user
    }
    this.ratingService.writeRatingData(body, rating.key)
  }

}
