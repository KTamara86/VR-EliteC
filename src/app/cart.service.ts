import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:any = []
  qty = 0
  total = 0

  cartSub = new BehaviorSubject([])

  constructor() { }

  addProduct(body:any){
    this.cart.push(body)
    this.qty = this.qty + body.qty
    this.total = this.total + (body.qty * body.price)
    this.cartSub.next(this.cart)
  }

  getCart(){
    return this.cartSub
  }

  getTotalQty(){
    return this.qty
  }

  getCartTotal(){
    console.log(this.total)
    return this.total
  }
}
