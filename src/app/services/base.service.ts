import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  url = "https://elitecarpets-2fa53-default-rtdb.europe-west1.firebasedatabase.app/termekek"
  productsSub = new Subject()

  constructor(private http:HttpClient){
    this.loadProducts()
  }

  getProducts(){
    return this.productsSub
  }

  private loadProducts(){
    this.http.get(this.url + ".json").subscribe(
      (res) => this.productsSub.next(res)
    )
  }
}
