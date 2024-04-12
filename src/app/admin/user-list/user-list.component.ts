import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AuthService } from 'src/app/services/auth.service';
import { ProfilService } from 'src/app/services/profil.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  usersArray: any;
  users: any;

  searchArgs = "";

  constructor(private profilService: ProfilService, private auth: AuthService, private db: AngularFireDatabase) {

    this.profilService.getUsers().subscribe(
      (res: any) => {
        let array = [];
        for (const key in res) {
          let element = res[key];
          element.key = key;
          array.push(element);
        }
        this.usersArray = array;
      }
    );

    this.profilService.reload();
  }

  modifyUser(userData: any) {
    let body = {
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      city: userData.city,
      address: userData.address,
      zipCode: userData.zipCode
    };

}

  deleteUser(userData: any) {
    if (confirm("Biztosan törölni szeretnéd a felhasználót?")) {
      this.profilService.deleteUser(userData.key);
    }
  }
}
