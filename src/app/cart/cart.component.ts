import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {



  cart:any
  totalQty:any
  total:number

  constructor(private cartService: CartService){
    this.cartService.getCart().subscribe(
      (res) => this.cart=res
    )
    this.cartService.getTotalQty().subscribe(
      (res) => this.totalQty= res
    )
    this.total = this.cartTotal()
  }

  cartTotal(){
    return this.cartService.getCartTotal()
  }

  removeProduct(body:any){
    this.cartService.removeProduct(body)
  }
}
