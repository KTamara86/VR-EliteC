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

  constructor(private packetPoint:PacketPointService){
    this.packetPoint.getPacketPointList().subscribe(
      {
        next: (res) => {
          this.packetPointList = res
          //TODO: jó lenne sorrendbe tenni valami alapján
        },
        error: (err) => {
          console.log(err)
          //TODO: normálisan lekezelni a hiba ágat
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
