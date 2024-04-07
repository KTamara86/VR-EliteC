import { Component } from '@angular/core';
import { PacketPointService } from '../services/packet-point.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  cart:any
  totalQty:any
  total:any

  entity:String = "person"
  deliveryOpt:String = "home"
  packetPointList:any;
  selectedPacketPointCity = "";
  selectedPacketPoint?:object;
  packetPointInfo:any;
  cities: any[] = [];
  errorShow = false;
  errorMsg = ""
  paymentOpt:String = "before"

  constructor(private packetPoint:PacketPointService, private cartService:CartService){
    this.packetPoint.getPacketPointList().subscribe(
      {
        next: (res) => {
          this.packetPointList = res
                    //TODO: jó lenne sorrendbe tenni a packetPointListet a group alapján alapján
          for (const obj of this.packetPointList){
            let existing = false;
            for (const city of this.cities){
              if(city == obj.city){
                existing = true;
                break;
              }
            }
            if(!existing){
              this.cities.push(obj.city)
            }
          }
          this.cities.sort()
        },
        error: (err) => {
          console.log(err)
          this.errorShow = true
          this.errorMsg = "Hiba! A csomagpontinformációk nem elérhetőek! Látogasson vissza később!"
        }
      }
    )
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

  selectPacketPointCity(newValue:any){
    this.selectedPacketPointCity = newValue
  }

  selectPacketPoint(newValue:any){
    this.selectedPacketPoint = newValue
  }



}
