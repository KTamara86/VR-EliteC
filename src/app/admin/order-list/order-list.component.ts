import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  
  ordersArray:any

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

  // modifyOrder(order:any){
  //   let body = {
  //     userid: this.user.userid, 
  //     consignee: this.data.consignee,
  //     taxnumber: this.data.taxnumber,
  //     phone: this.data.phone,
  //     zipcode: this.data.zipcode,
  //     city: this.data.city,
  //     address: this.data.address,
  //     deliveryZipcode: this.data.deliveryZipcode,
  //     deliveryCity: this.data.deliveryCity,
  //     deliveryAddress: this.data.deliveryAddress,
  //     datetime: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
  //     status:"megrendelve",
  //     qty: this.totalQty,
  //     total: this.total,
  //     packetPoint: false,
  //     payment: this.paymentOpt
  //   }
  //   this.orderService.writeOrderData(body, order.key)
  // }
}
