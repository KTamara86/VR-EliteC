import { Component } from '@angular/core';
import { PacketPointService } from '../packet-point.service';

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
  deliveryOpt:String = "home"
  packetPointList:any;
  selectedPacketPointCity = "";
  selectedPacketPoint?:object;
  packetPointInfo:any;
  cities: any[] = [];
  errorShow = false;
  errorMsg = ""

  constructor(private packetPoint:PacketPointService){
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
    
  }

  selectPacketPointCity(newValue:any){
    this.selectedPacketPointCity = newValue
  }

  selectPacketPoint(newValue:any){
    this.selectedPacketPoint = newValue
  }



}
