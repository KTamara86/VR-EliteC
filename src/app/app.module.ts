import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {AngularFireModule} from '@angular/fire/compat';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { ProductComponent } from './product/product.component';
import { PacketPointInfoComponent } from './packet-point-info/packet-point-info.component';
import { environment } from 'src/enviroments/enviroment';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
    CheckoutComponent,
    UserLoginComponent,
    UserSignUpComponent,
    ProductComponent,
    PacketPointInfoComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    TermsConditionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
