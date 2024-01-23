import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path:"home", component: HomeComponent},
  { path:"cart", component: CartComponent},
  { path:"checkout", component: CheckoutComponent},
  { path:"", component:HomeComponent },
  { path:"**", component:HomeComponent },
  { path: "userlogin", component: UserLoginComponent},
  { path: "usersignup", component: UserSignUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
