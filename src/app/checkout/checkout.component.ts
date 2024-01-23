import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  cart = [
    {"termek_id":"52","nev":"Luxury","mennyiseg":1,"uj_ar":9995},
    {"termek_id":"64","nev":"Opal","mennyiseg":3,"uj_ar":4995,},
    {"termek_id":"73","nev":"Flower","mennyiseg":2,"uj_ar":14385},
    {"termek_id":"77","nev":"Hedera","mennyiseg":1,"uj_ar":7995},
    {"termek_id":"52","nev":"Luxury","mennyiseg":11,"uj_ar":9995}
  ]

  entity:String = "person"
  deliveryOpt:String = "house"



}
