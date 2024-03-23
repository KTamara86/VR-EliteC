import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cart = [
    {"termek_id":"52","nev":"Luxury","mennyiseg":1,"uj_ar":9995},
    {"termek_id":"64","nev":"Opal","mennyiseg":3,"uj_ar":4995,},
    {"termek_id":"73","nev":"Flower","mennyiseg":2,"uj_ar":14385},
    {"termek_id":"77","nev":"Hedera","mennyiseg":1,"uj_ar":7995},
    {"termek_id":"52","nev":"Luxury","mennyiseg":11,"uj_ar":9995}
  ]

  cart2:any

  constructor(private cartService: CartService){
    this.cartService.getCart().subscribe(
      (res) => this.cart2=res
    )
  }

  cartTotal(){
    let total = 0
    this.cart.forEach(product => {
      total += product.mennyiseg*product.uj_ar
    });
    return total
  }
}
