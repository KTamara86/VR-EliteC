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
    let body:any = []
    body.key = product.key
    body.price = product.uj_ar
    body.qty = 1
    body.name = product.nev

    body.prodQty = product.db
    this.showResultToastMsg(this.cartService.addProduct(body), body)
  }

  showResultToastMsg(result:boolean, body:any){
    if(result){
      this.toastr.info(body.name + " termék bekerült a kosaradba", "SIKER", {
        closeButton: true,
        timeOut: 2000,
        progressBar: true,
        progressAnimation: "decreasing",
        positionClass: "toast-top-right",
        newestOnTop: true
      })
    }
    else{
      this.toastr.warning("Sajnos a " + body.name +  " termék elfogyott, nézz vissza később", "HIBA", {
        closeButton: true,
        timeOut: 2000,
        progressBar: true,
        progressAnimation: "decreasing",
        positionClass: "toast-top-right",
        newestOnTop: true
      })
    }
  }

  postRating(score:number, text:string){
    let body = {
      user: this.user.id,
      product: this.data.key,
      rating:  this.rating.score,
      text: this.rating.text,
      time: format(new Date(), 'yyyy-MM-dd HH:mm:ss')
    }
    this.ratingService.postRating(body)
  }
}
