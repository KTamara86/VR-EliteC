import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, map, of } from 'rxjs';
import { getDatabase, ref, set } from "firebase/database";

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  url = "https://elitecarpetsv2-default-rtdb.europe-west1.firebasedatabase.app/velemenyek.json"
  ratingsSub = new Subject()

  constructor(private http:HttpClient){
    this.loadRatings()
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

  writeRatingData(body:any, key:string) {
    const db = getDatabase();
    set(ref(db, 'velemenyek/' + key), body);
  }

  reload(){
    this.loadRatings()
  }

  getRatings(){
    return this.ratingsSub
  }

  private loadRatings(){
    this.http.get(this.url).subscribe(
      (res) => this.ratingsSub.next(res)
    )
  }
}
