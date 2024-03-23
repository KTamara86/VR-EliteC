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
    let i = this.cart.findIndex(
      (sor:any) => sor.key == body.key
    )
    
    if(i<0){
      this.cart.push(body)
    }
    else {
      this.cart[i].qty = this.cart[i].qty + body.qty
    }
    
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
