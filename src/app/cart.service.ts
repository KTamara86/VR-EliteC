import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:any = []

  cartSub = new BehaviorSubject([])

  constructor() { }

  addProduct(body:any){
    this.cart.push(body)
    this.cartSub.next(this.cart)
  }

  getCart(){
    return this.cartSub
  }
}
