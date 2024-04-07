import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  url = "https://elitecarpetsv2-default-rtdb.europe-west1.firebasedatabase.app/orders.json"
  orderSub = new Subject()

  constructor(private http:HttpClient) { 
    this.loadOrders()
  }

  postOrder(body:any){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    this.http.post(this.url, body, options).subscribe()
  }

  getOrders(){
    return this.orderSub
  }

  private loadOrders(){
    this.http.get(this.url).subscribe(
      (res) => this.orderSub.next(res)
    )
  }
}