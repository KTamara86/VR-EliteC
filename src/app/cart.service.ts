import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:any = []
  qty = 0

  cartSub = new BehaviorSubject([])

  constructor() { }

  addProduct(body:any){
    this.cart.push(body)
    this.qty = this.qty + body.qty
    this.cartSub.next(this.cart)
  }

  getCart(){
    return this.cartSub
  }

  getTotalQty(){
    console.log(this.qty)
    return this.qty
  }
}
