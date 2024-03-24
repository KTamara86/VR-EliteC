import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  totalProduct = 0

  constructor(private cartService:CartService){

    this.cartService.getTotalQty().subscribe(
      (res) => this.totalProduct=res
    )

  }
}
