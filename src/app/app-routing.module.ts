import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductComponent } from './product/product.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path:"home", component: HomeComponent},
  { path:"cart", component: CartComponent},
  { path:"checkout", component: CheckoutComponent},
  { path: "userlogin", component: UserLoginComponent},
  { path: "usersignup", component: UserSignUpComponent},
  { path: "forgotpassword", component: ForgotPasswordComponent},
  { path: "verifyemail", component: VerifyEmailComponent},
  { path:"", redirectTo:'/home', pathMatch: 'full' },
  { path:"**", component:HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
