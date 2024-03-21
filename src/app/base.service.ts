import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  url = "https://elitecarpets-2fa53-default-rtdb.europe-west1.firebasedatabase.app"
  productsSub = new Subject()

  constructor(private db:AngularFireDatabase, private http:HttpClient){
    this.loadProducts()
  }

  getProducts(){
    return this.productsSub
  }

  private loadProducts(){
    this.http.get(this.url + "/termekek.json").subscribe(
      (res) => this.productsSub.next(res)
    )
  }
}
