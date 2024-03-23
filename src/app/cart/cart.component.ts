import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {



  cart:any

  totalQty:number

  constructor(private cartService: CartService){
    this.cartService.getCart().subscribe(
      (res) => this.cart=res
    )
    this.totalQty = this.cartTotalQty()
  }

  cartTotalQty(){
    // let total = 0
    // this.cart.forEach(product => {
    //   total += product.mennyiseg*product.uj_ar
    // });
    // return total
    return this.cartService.getTotalQty()
  }

  //TODO: cartTotal not working
}
