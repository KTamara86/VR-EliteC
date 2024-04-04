import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  coll=true
  user:any=null;
  isSuperAdmin=false

  totalProduct = 0

  constructor(private auth:AuthService, private router:Router, private cartService:CartService){

    
    this.cartService.getTotalQty().subscribe(
      (res) => this.totalProduct=res
    )

    this.getIsSuperAdmin()
    
    this.auth.getLoggedUser().subscribe(
      (u)=>
        {
          this.user=u;
        }
    )

  }

  getIsSuperAdmin(){
    this.auth.getIsSuperAdmin().subscribe(
      (sadmin)=> {
        console.log("Jog frissült:", sadmin )
        this.isSuperAdmin=sadmin
      }
    )
  }

  signOut(){
    this.auth.signOut().then(
      ()=>this.router.navigate(['/signin'])
    )
  }

}
