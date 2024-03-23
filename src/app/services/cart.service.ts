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
  qtySub = new BehaviorSubject(0)
  totalSub = new BehaviorSubject(0)

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
    this.cartSub.next(this.cart)
    
    this.qty = this.qty + body.qty
    this.qtySub.next(this.qty)
    
    this.total = this.total + (body.qty * body.price)
    this.totalSub.next(this.total)
  }

  removeProduct(body:any){
    let i = this.cart.findIndex(
      (sor:any) => sor.key == body.key
    )

    this.qty = this.qty - this.cart[i].qty
    this.total = this.total - (this.cart[i].qty * this.cart[i].price)

    this.cart.splice(i, 1)

    this.cartSub.next(this.cart)
    this.qtySub.next(this.qty)
    this.totalSub.next(this.total)
  }

  getCart(){
    return this.cartSub
  }

  getTotalQty(){
    return this.qtySub
  }

  getCartTotal(){
    return this.totalSub
  }
}
