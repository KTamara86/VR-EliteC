import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ProfilComponent } from './profil/profil.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { notLoggedGuard } from './guard/not-logged.guard';
import { loginGuard } from './guard/login.guard';
import { sAdminGuard } from './guard/s-admin.guard';
import { AdminComponent } from './admin/admin.component';
import { ProfilDataComponent } from './profil/profil-data/profil-data.component';
import { MyOrdersComponent } from './profil/my-orders/my-orders.component';
import { MyOpinionComponent } from './profil/my-opinion/my-opinion.component';

const routes: Routes = [
  
  {path:"", component:HomeComponent},
  {path:"checkout", component:CheckoutComponent},
  {path:"home", component:HomeComponent},
  {path:"signup", component:UserSignUpComponent, canActivate:[notLoggedGuard]},
  {path:"signin", component:UserLoginComponent, canActivate:[notLoggedGuard]},
  {path:"forgotpassword", component:ForgotPasswordComponent},
  {path:"verifyemail", component:VerifyEmailComponent},
  {path:"profildata", component:ProfilDataComponent},
  {path:"myorders", component:MyOrdersComponent},
  {path:"myopinion", component:MyOpinionComponent},
  {path:"profil", component:ProfilComponent, canActivate:[loginGuard]},
  {path:"admin", component:AdminComponent, canActivate:[sAdminGuard] },
  {path:"**", component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
