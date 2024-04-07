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
  terms: boolean = false;

  constructor(private fireauth: AngularFireAuth, private db: AngularFireDatabase) {}

  onSubmit() {

    this.fireauth.createUserWithEmailAndPassword(this.email, this.password)
      .then((userCredential) => {

        const userData = {
          name: this.name,
          email: this.email,
          phone: this.phone,
          address: this.address,
        };

        this.db.list('/users').push(userData)
          .then(() => {

            console.log('Felhasználó sikeresen regisztrálva és adatok mentve.');
          })
          .catch((error) => {

            console.error('Hiba történt az adatok mentése során:', error);
          });
      })
      .catch((error) => {

        console.error('Hiba történt a regisztráció során:', error);
      });
  }
}