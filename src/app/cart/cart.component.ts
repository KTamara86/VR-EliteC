import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {



  cart:any
  totalQty:any
  total:any

  constructor(private cartService: CartService, private toastr:ToastrService){
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
    this.toastr.error(body.name + " terméket eltávolítottad a kosaradból", "ELTÁVOLÍTVA", {
      closeButton: true,
      timeOut: 2000,
      progressBar: true,
      progressAnimation: "decreasing",
      positionClass: "toast-bottom-right",
      newestOnTop: true
    })
  }

  increaseQty(body:any){
    body.qty = body.qty + 1
    this.cartService.updateProductQty(body)
    this.toastr.success(body.name + " termék mennyiségét növelted a kosaradban", "+1", {
      closeButton: true,
      timeOut: 2000,
      progressBar: true,
      progressAnimation: "decreasing",
      positionClass: "toast-bottom-right",
      newestOnTop: true
    })
  }

  minusButtonClickEvent(body:any){
    if(body.qty > 1){
      this.decreaseQty(body)
    }
    else{
      this.removeProduct(body)
    }
  }

  decreaseQty(body:any){
    body.qty = body.qty - 1
    this.cartService.updateProductQty(body)
    this.toastr.warning(body.name + " termék mennyiségét csökkentetted a kosaradban", "-1", {
      closeButton: true,
      timeOut: 2000,
      progressBar: true,
      progressAnimation: "decreasing",
      positionClass: "toast-bottom-right",
      newestOnTop: true
    })
  }
}
