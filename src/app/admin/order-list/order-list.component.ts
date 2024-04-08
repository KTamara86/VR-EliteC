import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  
  ordersArray:any

  searchArgs = ""

  status = ["megrendelve", "feladva", "kézbesítve"]

  constructor(private orderService:OrderService, private toastr:ToastrService){
    this.orderService.getOrders().subscribe(
      (res:any) => {
        let array = []
        for(const key in res){
          let element = res[key]
          element.key = key
          array.push(element)
        }
        this.ordersArray = array 
      }
    )
  }

ngOnInit(){
  this.orderService.reload()
  this.orderService.getOrders().subscribe(
    (res:any) => {
      let array = []
      for(const key in res){
        let element = res[key]
        element.key = key
        array.push(element)
      }
      this.ordersArray = array 
    }
  )
}

modifyOrder(order:any){
  let body = {
    userid: order.userid,
    consignee: order.consignee,
    taxnumber: order.taxnumber,
    phone: order.phone,
    zipcode: order.zipcode,
    city: order.city,
    address: order.address,
    deliveryZipcode: order.deliveryZipcode,
    deliveryCity: order.deliveryCity,
    deliveryAddress: order.deliveryAddress,
    datetime: order.datetime,
    status: order.status,
    qty: order.qty,
    total: order.total,
    packetPoint: order.packetPoint,
    payment: order.payment
  }
  
  this.orderService.writeOrderData(body, order.key).then(
    (res) => this.toastMsgOutlet(res, "modify")
  )
  }

  deleteOrder(key:string){
    this.orderService.deleteOrder(key).then(
      (res) => this.toastMsgOutlet(res, "delete")
    )

    //TODO: valahogy reloadolni kell
  }

  toastMsgOutlet(result:boolean, type:string){
    let toastHeaderTxt = ""
    let toastBodyTxt = ""
    let props:any = {
      closeButton: true,
      timeOut: 2000,
      progressBar: true,
      progressAnimation: "decreasing",
      positionClass: "toast-top-right",
      newestOnTop: true
    }

    if(type == "modify" && result){
      toastBodyTxt = "Sikeres adatmódosítás!"
      toastHeaderTxt = "SIKER"
    }
    else if(type == "modify" && !result){
      toastBodyTxt = "Valami hiba lépett fel, próbálkozz később!"
      toastHeaderTxt = "HIBA"
    }
    else if(type == "delete" && result){
      toastBodyTxt = "Sikeresen törölted a rendelést"
      toastHeaderTxt = "SIKER"
    }
    else if(type == "delete" && !result){
      toastBodyTxt = "Valami hiba lépett fel, próbálkozz később!"
      toastHeaderTxt = "HIBA"
    }
    
    if(result){
      this.toastr.info(toastBodyTxt, toastHeaderTxt, props)
    }
    else{
      this.toastr.warning(toastBodyTxt, toastHeaderTxt, props)
    }
  }
}
