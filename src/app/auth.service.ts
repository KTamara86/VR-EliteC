import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  constructor(private fireauth : AngularFireAuth, private router : Router) { }

  login(email : string, password : string) {
    this.fireauth.signInWithEmailAndPassword(email,password).then( () => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['home']);
    }, err => {
      alert (err.message);
      this.router.navigate(['/userlogin']);
    })
  }

  register(email : string, password : string) {
    this.fireauth.createUserWithEmailAndPassword(email,password).then( () => {
      alert('Regisztráció sikeres');
      this.router.navigate(['userlogin']);
    }, err => {
      alert (err.message);
      this.router.navigate(['/usersignup']);
    })
  }

  logout() {
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['/userlogin']);
    },err => {
      alert(err.message);
    })
  } 
  
  forgotpassword(emial : string) {
    this.fireauth.sendPasswordResetEmail(emial).then( () => {
      this.router.navigate(['/verifyemail']);
    },err => {
      alert(err.message);
    })  
  }
}
