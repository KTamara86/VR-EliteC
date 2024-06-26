import { Injectable } from '@angular/core';
import { getDatabase, onValue, ref, set } from 'firebase/database';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userSub = new BehaviorSubject(Object)
  user:any
  key!:string
  constructor() { }

  loadUserData(key:string){
    if(!this.user){
      this.key=key
      const db = getDatabase();
      const userRef = ref(db, 'users/' + key);
      onValue(userRef, (snapshot) => {
      this.setUser(snapshot.val())
    })
    }
  }

  getKey() : string {
    return this.key
  }
  

  getUserData(){   
    return this.userSub
  }

  setUser(data:any){
    this.user = data
    this.userSub.next(this.user)
  }

  addUser(user:any, key:string){
    const db = getDatabase();
    set(ref(db, 'users/' + key), user);
  }
}
