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
  total:number

  constructor(private cartService: CartService){
    this.cartService.getCart().subscribe(
      (res) => this.cart=res
    )
    this.totalQty = this.cartTotalQty()
    this.total = this.cartTotal()
  }

  cartTotalQty(){
    return this.cartService.getTotalQty()
  }

  cartTotal(){
    return this.cartService.getCartTotal()
  }
}
