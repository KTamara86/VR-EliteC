import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent {

  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  phone: string = '';
  address: string = '';
  city: string = '';
  zipCode: string = '';

  message: string = '';

  constructor(private fireauth: AngularFireAuth, private db: AngularFireDatabase, private userService:UserService, private router:Router) {}

  onSubmit() {
   
    if (!this.name || !this.email || !this.password || !this.confirmPassword || !this.phone || !this.city || !this.address || !this.zipCode) {
      this.message = 'Kérjük, töltse ki az összes mezőt!';
      return; 
    }
  
    if (this.password !== this.confirmPassword) {
      this.message = 'A jelszavak nem egyeznek!';
      return; 
    }
  
    this.fireauth.createUserWithEmailAndPassword(this.email, this.password)
      .then((userCredential) => {
        const userData = {
          name: this.name,
          email: this.email,
          phone: this.phone,
          address: this.address,
          city: this.city,
          zipCode: this.zipCode,
        };
  
        const key = this.email.replace('@', '').replace('.', ''); 
  
        this.userService.addUser(userData, key); 
        this.router.navigate(['/home'])
      })
      .catch((error) => {
        this.message = 'Hiba történt a regisztráció során: ' + error.message;
      });
  }
}

