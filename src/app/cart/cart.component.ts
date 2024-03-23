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
  total:any

  constructor(private cartService: CartService){
    this.cartService.getCart().subscribe(
      (res) => this.cart = res
    )
    this.cartService.getTotalQty().subscribe(
      (res) => this.totalQty = res
    )
    this.cartService.getCartTotal().subscribe(
      (res) => this.total = res
    )
  }

  removeProduct(body:any){
    this.cartService.removeProduct(body)
  }
}
