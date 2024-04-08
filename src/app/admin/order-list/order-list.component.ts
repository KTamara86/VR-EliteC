import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private orderService:OrderService, private router:Router){
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
    (res) => console.log(res)
  )
  }

  deleteOrder(key:string){
    this.orderService.deleteOrder(key).then(
      (res) => console.log(res)
    )
    // TODO: vizuális visszaigazolás kell

    //TODO: valahogy reloadolni kell
  }
}
