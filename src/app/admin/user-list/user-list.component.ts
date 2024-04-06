import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  users:any;
  
 constructor(private auth:AuthService){
  this.auth.getUsers()?.subscribe({
    next:(users:any)=>this.users=users,
    error:(e)=>console.log(e)
 })
 }

 save(user:any){
  this.auth.setCustomClaims(user.uid, user.claims)
 }

}