import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Conditional } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  url = "https://elitecarpets-2fa53-default-rtdb.europe-west1.firebasedatabase.app/velemenyek"
  ratingsSub = new Subject()
  

  constructor(private http:HttpClient){
    this.loadRatings()
  }

  postRating(body:any){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    this.http.post('https://elitecarpets-2fa53-default-rtdb.europe-west1.firebasedatabase.app/velemenyek.json', body, options).subscribe(
      (res) => console.log(res)
    );
  }

  getRatings(){
    return this.ratingsSub
  }

  private loadRatings(){
    this.http.get(this.url + ".json").subscribe(
      (res) => this.ratingsSub.next(res)
    )
  }
}
