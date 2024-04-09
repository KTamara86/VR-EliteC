import { Component } from '@angular/core';
import { PacketPointService } from '../services/packet-point.service';
import { CartService } from '../services/cart.service';
import { format } from 'date-fns';
import { OrderService } from '../services/order.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'
import { BaseService } from '../services/base.service';

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
  selectedPacketPoint:any
  cities: any[] = [];
  
  errorShow = false;
  errorMsg = ""
  

  constructor(private packetPoint:PacketPointService, private cartService:CartService, private orderService:OrderService, 
    private toastr:ToastrService, private router:Router, private base:BaseService){
      this.packetPoint.getPacketPointList().subscribe(
        {
          next: (res) => {
            this.packetPointList = res
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

  qtyCheck() : boolean {
    let qtyCHeckResult = true
    for(const key in this.cart){
      let element = this.cart[key]
      if(element.qty > element.prodQty){
        qtyCHeckResult = false
        break
      }
    }
    return qtyCHeckResult
  }

  removeUnusedProp(){
    let cart = []
    let i = 0
    for(const key in this.cart){
      let element = this.cart[key]
      cart.push(element)
      cart[i].category = null
      cart[i].prodQty = null
      i++
    }
    return cart
  }

  orderProducts(){
    let result:boolean = this.qtyCheck()
    
    let prods = this.removeUnusedProp()

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
      products: prods,
      datetime: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      status:"megrendelve",
      qty: this.totalQty,
      total: this.total,
      packetPoint: false,
      payment: this.paymentOpt
    }

    if(this.deliveryOpt != "home") {
      body.deliveryZipcode = this.selectedPacketPoint.zip
      body.deliveryCity =  this.selectedPacketPoint.city
      body.deliveryAddress =  this.selectedPacketPoint.street
      body.packetPoint = true
    }

    if(!this.termsValue || this.data.consignee == "" || this.data.phone == "" || this.data.zipcode == "" ||
      this.data.address == "" || this.data.deliveryZipcode == "" || this.data.deliveryCity == "" || 
      this.data.deliveryAddress == "" || (this.entity == "company" && this.data.taxnumber == "")){
        this.callToasts(false, "Hibásan kitöltött adatok és/vagy ÁSZF nem került elfogadásra!", "HIBA")
    }
    else {
      if(result){
        this.orderService.postOrder(body).subscribe(
          (res) =>{
            if(res){
              this.callToasts(res, "A megrendelést hamarosan láthatod a profilod alatt", "Sikeres megrendelés")
              this.cartService.emptyCart()
              this.router.navigate(['home'])
            }
            else this.callToasts(res, "Sikertelen megrendelés, próbáld meg később", "HIBA")
          }  
        )
      }
      else this.callToasts(false, "Sikertelen megrendelés, valamelyik termék elfogyott", "HIBA")
    }
  }

  callToasts(result:boolean, toastBodyTxt:string, toastHeaderTxt:string){
    let props:any = {
      closeButton: true,
      timeOut: 5000,
      progressBar: true,
      progressAnimation: "decreasing",
      positionClass: "toast-top-right",
      newestOnTop: true
    }

    if(result) this.toastr.info(toastBodyTxt, toastHeaderTxt, props)
    else this.toastr.warning(toastBodyTxt, toastHeaderTxt, props)
  }
}
