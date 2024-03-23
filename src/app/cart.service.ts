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
    this.cart.pus(body)
    this.cartSub.next(this.cart)
  }

  getCart(){
    return this.cartSub
  }
}
