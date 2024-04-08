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
    this.ratingService.writeRatingData(body, rating.key).then(
      (res) => this.toastMsg(res)
    )

    //TODO: kellene ide is vmi toast az eredményről 
  }

  toastMsg(result:boolean){
    let toastHeaderTxt = ""
    let toastBodyTxt = ""
    let props:any = {
      closeButton: true,
      timeOut: 2000,
      progressBar: true,
      progressAnimation: "decreasing",
      positionClass: "toast-top-right",
      newestOnTop: true
    }

    if(result){
      toastBodyTxt = "Sikeresen kicenzúráztad a véleményt"
      toastHeaderTxt = "SIKER"
    }
    else {
      toastBodyTxt = "Valami hiba lépett fel, próbálkozz később"
      toastHeaderTxt = "HIBA"
    }
    
    if(result){
      this.toastr.info(toastBodyTxt, toastHeaderTxt, props)
    }
    else{
      this.toastr.warning(toastBodyTxt, toastHeaderTxt, props)
    }
  }

}
