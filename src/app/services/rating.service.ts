import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, map, of } from 'rxjs';
import { equalTo, getDatabase, onValue, orderByChild, query, ref, remove, set } from "firebase/database";

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  url = "https://elitecarpetsv2-default-rtdb.europe-west1.firebasedatabase.app/velemenyek.json"
  ratingsSub = new Subject()

  constructor(private http:HttpClient){
    this.loadRatings()
  }

  private loadRatings(){
    this.http.get(this.url).subscribe(
      (res) => this.ratingsSub.next(res)
    )
  }

  postRating(body:any) : Observable<boolean>{
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

  

  loadMyRatings(userEmail:string){
    let ratingsArray:any = []
    const db = getDatabase()
    const ratings = query(ref(db, 'velemenyek/'), orderByChild('useremail'), equalTo(userEmail));
    onValue(ratings, (snapshot)=> {
      snapshot.forEach((child:any) => {
        let element = child.val()
        element.key = child.key
        ratingsArray.push(element)
      }) 
    })
    return ratingsArray    
  }

  async writeRatingData(body:any, key:string) : Promise<boolean>{
    const db = getDatabase();
    try {
      await set(ref(db, 'velemenyek/' + key), body)
      this.reload()
      return true
    } catch(error) { return false }
  }

  async deleteRating(key: string) : Promise<boolean>{
    const db = getDatabase();
    try {
      await remove(ref(db, 'velemenyek/' + key))
      this.reload()
      return true
    } catch(error) { return false }
  }

  reload(){
    this.loadRatings()
  }

  getRatings(){
    return this.ratingsSub
  }


}

