import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserSignUpComponent } from './components/user-sign-up/user-sign-up.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { ProfilComponent } from './components/profil/profil.component';
import { notLoggedGuard } from './guard/not-logged.guard';
import { loginGuard } from './guard/login.guard';
import { AdminComponent } from './admin/admin.component';
import { sAdminGuard } from './guard/s-admin.guard';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full" },
  {path: "home", component: HomeComponent },
  {path:"checkout", component:CheckoutComponent},
  {path:"signup", component:UserSignUpComponent, canActivate:[notLoggedGuard]},
  {path:"signin", component:UserLoginComponent, canActivate:[notLoggedGuard]},
  {path:"forgotpassword", component:ForgotPasswordComponent},
  {path:"verifyemail", component:VerifyEmailComponent},
  {path:"profil", component:ProfilComponent, canActivate:[loginGuard]},
  {path:"admin", component:AdminComponent, canActivate:[sAdminGuard] },
  {path:"**", component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
