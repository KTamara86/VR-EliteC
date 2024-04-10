import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { getDatabase, ref, set } from "firebase/database";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  url = "https://elitecarpetsv2-default-rtdb.europe-west1.firebasedatabase.app/users.json"

  usersSub = new Subject();

  constructor(private http: HttpClient, private db: AngularFireDatabase) {
    this.loadUsers();
  }

  writeUserData(body: any, key: string) {
    const db = getDatabase();
    set(ref(db, 'users/' + key), body);
  }

  reload() {
    this.loadUsers();
  }

  getUsers() {
    return this.usersSub;
  }

  private loadUsers() {
    this.http.get(this.url).subscribe(
      (res) => this.usersSub.next(res)
    );
  }
}
