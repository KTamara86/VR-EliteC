import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent {

  regisztracio: any
  showError = false
  errorMessage = ""

  constructor(private base:BaseService, private router: Router){

    this.base.getRegisztarcio().subscribe(
    {
      next:  (res)=>{
        this.regisztracio = res
        this.showError = false
      },
      error: (err)=>{
        this.showError = true
        this.errorMessage = err.message
      }
    
    }
    )
}
}
