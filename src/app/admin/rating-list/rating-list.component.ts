import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-rating-list',
  templateUrl: './rating-list.component.html',
  styleUrls: ['./rating-list.component.css']
})
export class RatingListComponent {

  ratingsArray:any

  constructor(private ratingService:RatingService, private toastr:ToastrService){
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

  modifyRating(rating:any){
    let text = "CENZÚRÁZOTT VÉLEMÉNY: A vélemény kívül esett a jó ízlés határain"
    let body = {
      product: rating.product,
      rating: rating.rating,
      text: text,
      time: rating.time,
      useremail: rating.useremail
    }
    this.ratingService.writeRatingData(body, rating.key).then(
      (res) => this.toastMsg(res)
    )
  }

  toastMsg(result:boolean){
    let props:any = {
      closeButton: true,
      timeOut: 2000,
      progressBar: true,
      progressAnimation: "decreasing",
      positionClass: "toast-top-right",
      newestOnTop: true
    }

    if(result) this.toastr.info("Sikeresen kicenzúráztad a véleményt", "SIKER", props)
    else this.toastr.warning("Valami hiba lépett fel, próbálkozz később", "HIBA", props)
  }
  
  scrollToBottom() {
    const element = document.getElementById('bottom');
    if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToTop() {
    const element = document.getElementById('topScroll');
    if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
