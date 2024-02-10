import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {

  email : string = '';
  password : string = '';

  constructor(private auth : AuthService) {}

  ngOnInit(): void {
      
  }

  register() {

    if(this.email == ''){
      alert('Kérem adja meg e-mail címét');
      return;
    }

    if (this.password == ''){
      alert('Kérem adja meg jelszavát');
      return;
    }

    this.auth.register(this.email,this.password);
    
    this.email = '';
    this.password = '';
  }
}

