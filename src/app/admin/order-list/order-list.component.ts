import { Component } from '@angular/core';
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

  constructor(private orderService:OrderService){
    orderService.getOrders().subscribe(
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
  
  this.orderService.writeOrderData(body, order.key)
  }

  deleteOrder(key:string){
    this.orderService.deleteOrder(key)
  }
}
