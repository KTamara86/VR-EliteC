import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {

  user:any=null

  constructor(private auth:AuthService){
    this.auth.getUser().subscribe(
      (res)=>{
        this.user=Object.assign({},res)._delegate
        if (this.user?.claims) this.user.claims=res.claims
      }
    )
  }
  
  save(){
    this.auth.setCustomClaims(this.user.uid, this.user.claims)
    this.auth.setDisplayName(this.user.uid, this.user.displayName)
  }
  
  }
