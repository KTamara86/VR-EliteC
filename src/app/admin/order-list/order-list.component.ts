import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  
  ordersArray:any

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
  
  console.log(order)

  // this.orderService.writeOrderData(body, order.key)
  }
}
