import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserSignUpComponent } from './components/user-sign-up/user-sign-up.component';
import { ProductComponent } from './components/product/product.component';
import { PacketPointInfoComponent } from './components/packet-point-info/packet-point-info.component';
import { environment } from 'src/enviroments/enviroment';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { TermsConditionsComponent } from './components/terms-conditions/terms-conditions.component';
import { SearchPipe } from './pipes/search.pipe';
import { SearchComponent } from './components/search/search.component';
import { RatingPipe } from './pipes/rating.pipe';
import { ProfilComponent } from './components/profil/profil.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { AdminComponent } from './admin/admin.component';
import { RatingListComponent } from './admin/rating-list/rating-list.component';
import { OrderListComponent } from './admin/order-list/order-list.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { KeyPipe } from './pipes/key.pipe';
import { ProfilDataComponent } from './components/profil/profil-data/profil-data.component';
import { OrdersDataComponent } from './components/profil/orders-data/orders-data.component';

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
    TermsConditionsComponent,
    SearchPipe,
    SearchComponent,
    RatingPipe,
    ProfilComponent,
    UserListComponent,
    AdminComponent,
    RatingListComponent,
    OrderListComponent,
    ProductListComponent,
    KeyPipe,
    ProfilDataComponent,
    OrdersDataComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {
        maxOpened: 5
      }
    ),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
