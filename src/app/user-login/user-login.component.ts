import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

    email : string = '';
    password : string = '';

    constructor(private auth : AuthService) {}

    ngOnInit(): void {
        
    }

    login() {

      if(this.email == ''){
        alert('Kérem adja meg e-mail címét');
        return;
      }

      if (this.password == ''){
        alert('Kérem adja meg jelszavát');
        return;
      }

      this.auth.login(this.email,this.password);
      
      this.email = '';
      this.password = '';
    }
}
