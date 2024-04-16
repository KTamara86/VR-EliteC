import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-ratings-data',
  templateUrl: './ratings-data.component.html',
  styleUrls: ['./ratings-data.component.css']
})
export class RatingsDataComponent implements OnInit {
  
    myRatings:any
  
  constructor(private auth:AuthService, private rs:RatingService) { }
  
  ngOnInit(): void {
    this.myRatings = this.rs.loadMyRatings(this.auth.user.email)
  }

  delRating(key:string){

  }
  
  modify(rating:any){

  }
}
