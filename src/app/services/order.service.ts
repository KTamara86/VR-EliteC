import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  url = "https://elitecarpetsv2-default-rtdb.europe-west1.firebasedatabase.app/orders.json"
  orderSub = new Subject()

  constructor(private http:HttpClient) { 
    this.loadOrders()
  }

  postOrder(body:any) : Observable<boolean>{
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post(this.url, body, options).pipe(
      map(() => true),
      catchError(() => of(false))
    )
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