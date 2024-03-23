import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  product: any;

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


  constructor(private route: ActivatedRoute, private cartService:CartService) {
    this.totalScore=this.sumScores()
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.product = params;
    });
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

    this.cartService.addProduct(body)
  }
}
