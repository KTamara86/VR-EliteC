import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getDatabase, push, ref, get, remove, set, child } from 'firebase/database';
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

  async updateQty(qty:number, category:string, key:string){
    const db = getDatabase();
    const dbRef = ref(getDatabase())
    get(child(dbRef, `termekek/${category}/${key}/db`)).then((snapshot) => {
      if(snapshot.exists()) {
        set(ref(db, 'termekek/' + category + '/' + key + '/db/'), snapshot.val()-qty );
      } else {
        console.log("Hiba az adatkapcsolatban")
      } 
    }).catch((error) => {
    console.error(error)
    })    
  }

  async postProduct(body:any, category:string) : Promise<boolean>{
    const db = getDatabase();
    try {
      await push(ref(db,'termekek/' + category +'/'), body)
      this.reload()
      return true
    } catch(error) { return false }
  }

  async deleteProduct(key: string, category:string) : Promise<boolean>{
    const db = getDatabase();
    try {
      await remove(ref(db, 'termekek/' + category +'/' + key))
      this.reload()
      return true
    } catch(error) { return false }
  }

  async writeProductData(body:any, key:string, category:string) : Promise<boolean>{
    const db = getDatabase();
    try {
      await set(ref(db, 'termekek/' + category +'/' + key), body)
      this.reload()
      return true
    } catch(error) { 
      console.log(error)
      return false }
  }
}
