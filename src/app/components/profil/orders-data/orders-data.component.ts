import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders-data',
  templateUrl: './orders-data.component.html',
  styleUrls: ['./orders-data.component.css']
})
export class OrdersDataComponent implements OnInit{
  
  myOrders:any

  constructor(private os:OrderService, private auth:AuthService){ }

  ngOnInit(): void {
    this.myOrders = this.os.loadMyOrders(this.auth.user.email)
  }

}
