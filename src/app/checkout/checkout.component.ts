import { Component } from '@angular/core';
import { PacketPointService } from '../services/packet-point.service';
import { CartService } from '../services/cart.service';
import { format } from 'date-fns';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  cart:any
  totalQty:any
  total:any


  user = {
    userid:0,
    phone: "06301636655",
    name: "Janos",
    zipcode:"1234",
    city:"Bélapátalva",
    address:"hhsbadai",
  }

  data = {
    consignee: this.user.name,
    taxnumber: "",
    phone: this.user.phone,
    zipcode: this.user.zipcode,
    city: this.user.city,
    address: this.user.address,
    deliveryZipcode: this.user.zipcode,
    deliveryCity: this.user.city,
    deliveryAddress: this.user.zipcode,
  }

  entity:String = "person"
  deliveryOpt:String = "home"
  paymentOpt:String = "before"
  termsValue = false
  
  packetPointList:any;
  selectedPacketPointCity = "";
  selectedPacketPoint?:object;
  packetPointInfo:any;
  cities: any[] = [];
  
  errorShow = false;
  errorMsg = ""
  

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

  orderProducts(){
    let body = {
      userid: this.user.userid, 
      consignee: this.data.consignee,
      taxnumber: this.data.taxnumber,
      phone: this.data.phone,
      zipcode: this.data.zipcode,
      city: this.data.city,
      address: this.data.address,
      deliveryZipcode: this.data.deliveryZipcode,
      deliveryCity: this.data.deliveryCity,
      deliveryAddress: this.data.deliveryAddress,
      products: this.cart,
      datetime: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      status:"megrendelve",
      qty: this.totalQty,
      total: this.total,
      packetPoint: false,
      payment: this.paymentOpt
    }

    if(this.deliveryOpt != "home") {
      // TODO: a packetpointtól kapja az értékét
      body.deliveryZipcode = ""
      body.deliveryCity =  ""
      body.deliveryAddress =  "",
      body.packetPoint = true
    }

    if(this.termsValue){
      console.log(body)
    }
    else {
      console.log('ASZF')
    }
    
  }

}
