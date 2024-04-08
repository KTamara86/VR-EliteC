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

  modifyRating(order:any){
    // let text = "CENZÚRÁZOTT VÉLEMÉNY: A vélemény kívül esett a jó ízlés határain"
    let body = {
    //   product: rating.product,
    //   rating: rating.rating,
    //   text: text,
    //   time: rating.time,
    //   user: rating.user
    }
    this.orderService.writeOrderData(body, order.key)
  }
}
