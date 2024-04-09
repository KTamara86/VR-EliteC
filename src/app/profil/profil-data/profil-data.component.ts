import { Component } from '@angular/core';
import { ProfilService } from 'src/app/services/profil.service';

@Component({
  selector: 'app-profil-data',
  templateUrl: './profil-data.component.html',
  styleUrls: ['./profil-data.component.css']
})
export class ProfilDataComponent {

  usersArray:any

  constructor(private profilService:ProfilService){
    profilService.getUsers().subscribe(
      (res:any) => {
        let array = []
        for(const key in res){
          let element = res[key]
          element.key = key
          array.push(element)
        }
        this.usersArray = array 
      }
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
    }
    this.profilService.writeUserData(body, user.key)
  }

}
