import { Component } from '@angular/core';
import { ProfilService } from 'src/app/services/profil.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profil-data',
  templateUrl: './profil-data.component.html',
  styleUrls: ['./profil-data.component.css']
})
export class ProfilDataComponent {

  user: any

  constructor(private profilService:ProfilService, private userService: UserService){

    this.userService.getUserData().subscribe(
      (res:any) => this.user = res
   )

  }

  ngOnInit(){
    this.profilService.reload()
  }

  modifyUser(user:any){
    let body = {
      name: user.name,
      email: user.email,
      phone: user.phone,
      city: user.city,
      address: user.address,
      zipCode: user.zipCode
    };

     this.profilService.writeUserData(body, user.key)
  }
}
