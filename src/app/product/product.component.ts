import { Component, Input } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { format } from 'date-fns';
import { RatingService } from '../services/rating.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() data:any;

  user = { // TODO: userünket is át kell majd írni
    name: "Felix (itt lesz a nev)",
    id: 15
  }

  ratingsArray:any
  rating = { score:3, text: "" }

  constructor(private cartService:CartService, private toastr:ToastrService, private ratingService:RatingService) {
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

  sumScores(){
    let score = 0.0;
    let qty = 0;
    for(let rating in this.ratingsArray) {
      if(this.ratingsArray[rating].product == this.data.key){
            score = score + this.ratingsArray[rating].rating
            qty++
      }
    }
    return score/qty
  }

  addToCart(product:any){
    let body:any = {}
    body.key = product.key
    body.price = product.uj_ar
    body.qty = 1
    body.name = product.nev
    body.category = product.category

    body.prodQty = product.db
    this.toastMsgOutlet(this.cartService.addProduct(body), body, "cart")
  }

  postRating(){
    let body = {
      user: this.user.id,
      product: this.data.key,
      rating:  this.rating.score,
      text: this.rating.text,
      time: format(new Date(), 'yyyy-MM-dd HH:mm:ss')
    }
    this.ratingService.postRating(body).subscribe(
      (res) => this.toastMsgOutlet(res, body, "rating")
    )
    this.rating.score = 3
    this.rating.text = ""
  }

  toastMsgOutlet(result:boolean, body:any, type:string){
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

    if(type == "cart" && result){
      toastBodyTxt = body.name + " termék bekerült a kosaradba"
      toastHeaderTxt = "SIKER"
    }
    else if(type == "cart" && !result){
      toastBodyTxt = "Sajnos a " + body.name +  " termék elfogyott, nézz vissza később"
      toastHeaderTxt = "HIBA"
    }
    else if(type == "rating" && result){
      toastBodyTxt = "Sikeres hozzászólás"
      toastHeaderTxt = "Köszönjük!"
    }
    else if(type == "rating" && !result){
      toastBodyTxt = "Sajnos valami hiba történt, próbálja meg később"
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
