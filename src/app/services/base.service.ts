import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getDatabase, push, ref, set } from 'firebase/database';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  url = "https://elitecarpetsv2-default-rtdb.europe-west1.firebasedatabase.app/termekek"
  productsSub = new Subject()

  constructor(private http:HttpClient){
    this.loadProducts()
  }

  getProducts(){
    return this.productsSub
  }

  reload(){
    this.loadProducts()
  }

  private loadProducts(){
    this.http.get(this.url + ".json").subscribe(
      (res) => this.productsSub.next(res)
    )
  }

  // postProduct(body:any, category:string) : Observable<boolean>{
  //   const options = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   }
  //   return this.http.post(this.url + '/' + category + '/post', body).pipe(
  //     map(() => true),
  //     catchError(() => of(false))
  //   )
  // }

  async postProduct(body:any, category:string) : Promise<boolean>{
    const db = getDatabase();
    try {
      await push(ref(db,'termekek/' + category +'/'), body)
      this.reload()
      return true
    } catch(error) { return false }
  }
}
