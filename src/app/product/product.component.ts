import { Component, Input } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() data:any;

  product: any

  user = {
    name: "Felix (itt lesz a nev)",
    id: 15
  }

  ratings = [
    {
      user: "Mónika",
      score: 5,
      text: "Nagyon jó mínőségű termék",
      date: "2024-01-11"
    },
    {
      user: "Dezső",
      score: 3,
      text: "A színeket nem adja vissza megfelelően a feltöltött kép",
      date: "2024-01-21"
    },
    {
      user: "József",
      score: 4,
      text: "A minőség megfelelő, viszont az ár lehetne kevesebb..",
      date: "2024-01-21"
    },
    {
      user: "Béla",
      score: 5,
      text: "",
      date: "2024-01-25"
    }
  ];
  totalScore:number;
  categories= ["üres", "Padlószőnyeg", "Szőnyeg", "Futószőnyeg", "Lábtörlő"]


  constructor(private cartService:CartService, private toastr:ToastrService) {
    // TODO: kell majd egy service, ami a ratingeket kezeli
    this.totalScore=this.sumScores()
  }

  sumScores(){
      // TODO: ezt majd át kell írni teljesen
    let score = 0.0;
    let qty = 0;

    this.ratings.forEach(rating => {
      score = score + rating.score
      qty++;
    });
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

  // postRating(score:number, text:string){
  //   let body:any
  //   body.key = this.user.id
  //   body.product = this.data.key
  //   console.log(this.data.key)
  // }
}
