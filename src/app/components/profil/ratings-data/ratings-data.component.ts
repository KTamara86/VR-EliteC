import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-ratings-data',
  templateUrl: './ratings-data.component.html',
  styleUrls: ['./ratings-data.component.css']
})
export class RatingsDataComponent implements OnInit {
  
    myRatings:any
  
  constructor(private auth:AuthService, private rs:RatingService, private toastr:ToastrService) { }
  
  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.myRatings = null
    this.myRatings = this.rs.loadMyRatings(this.auth.user.email)
  }

  delRating(key:string){
    this.rs.deleteRating(key).then(
      (res) => {
        this.toastMsgOutlet(res, "delete")
        this.loadData()
      }
    )
  }
  
  modify(rating:any){
    let key = rating.key
    rating.key = null
    this.rs.writeRatingData(rating, key).then(
      (res) => {
        this.toastMsgOutlet(res, "modify")
        this.loadData()
      }
    )
  }

  toastMsgOutlet(result:boolean, type:string){
    let props:any = {
      closeButton: true,
      timeOut: 2000,
      progressBar: true,
      progressAnimation: "decreasing",
      positionClass: "toast-top-right",
      newestOnTop: true
    }

    if(type == "modify") {
      if(result) this.toastr.info("Sikeresen módostottad a véleményt", "SIKER", props)
      else this.toastr.warning("Valami hiba lépett fel, próbálkozz később", "HIBA", props)
    }
    else {
      if(result) this.toastr.info("Sikeresen törölted a véleményt", "SIKER", props)
      else this.toastr.warning("Valami hiba lépett fel, próbálkozz később", "HIBA", props)
    }
  }
}
