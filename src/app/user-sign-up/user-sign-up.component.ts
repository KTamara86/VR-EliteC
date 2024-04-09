import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Validation from '../validation/validation';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';

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

  constructor(private fireauth: AngularFireAuth, private db: AngularFireDatabase) {}

  onSubmit() {

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

        this.db.list('/users').push(userData)
          .then(() => {
            this.message = 'A regisztráció sikeres.';
          })
          .catch((error) => {
            this.message = 'Hiba történt az adatok mentése során: ' + error.message;
          });
      })
      .catch((error) => {
        this.message = 'Hiba történt a regisztráció során: ' + error.message;
      });
}

}