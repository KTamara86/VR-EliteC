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

  callSubs(){
    this.cartSub.next(this.cart)
    this.qtySub.next(this.qty)
    this.totalSub.next(this.total)
  }

  addProduct(body:any){
    if(body.prodQty != 0){
      let i = this.cart.findIndex(
        (sor:any) => sor.key == body.key
      )
      
      if(i<0){
        this.cart.push(body)
        this.qty = this.setQty()
        this.total = this.setTotal()
        this.callSubs()
        return true
      }
      else {
        if((this.cart[i].qty + body.qty) <= body.prodQty ){
          this.cart[i].qty = this.cart[i].qty + body.qty
          this.qty = this.setQty()
          this.total = this.setTotal()
          this.callSubs()
          
          return true
        }
        else{
          return false
        }
      }
    }
    else{
      return false
    }
    
  }

  emptyCart(){
    this.cart = []
    this.qty = 0
    this.total = 0

    this.callSubs()
  }

  updateProductQty(body:any){
    let i = this.cart.findIndex(
      (sor:any) => sor.key == body.key
    )

    this.cart[i].qty = body.qty
    this.qty = this.setQty()
    this.total = this.setTotal()

    this.callSubs()
  }

  removeProduct(body:any){
    let i = this.cart.findIndex(
      (sor:any) => sor.key == body.key
    )

    this.cart.splice(i, 1)

    this.qty = this.setQty()
    this.total = this.setTotal()

    this.callSubs()
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

  setTotal(){
    let total = 0
    let products = this.cart

    for (let i = 0; i < products.length; i++) {
      const element = products[i];
      total = total + (element.qty * element.price)
    }
    return total
  }

  setQty(){
    let qty = 0
    let products = this.cart

    for (let i = 0; i < products.length; i++) {
      const element = products[i];
      qty = qty + element.qty
    }
    return qty
  }
}
