import { Component, Input } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() data:any;

  product: any

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


  constructor(private cartService:CartService) {
    this.totalScore=this.sumScores()
  }

  sumScores(){
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

    this.cartService.addProduct(body)
  }
}
