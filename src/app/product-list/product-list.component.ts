import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  szurok = [
    {
      "name": "Anyag",
      "options":  ["100% Poliészter", "100% polipropilén", "100% polyester", "100% Polypropilen", "100% PP Heatset"]
    },
    {
      "name": "Mintázat",
      "options":  ["Egyszínű", "mintás"]
    },
    {
      "name": "Méret",
      "options":  ["80 cm x 150 cm", "200 cm x 290 cm", "160 cm x 230 cm", "120 cm x 170 cm", "40 cm x 60 cm", "60 cm x 110 cm"]
    },
    {
      "name": "Szín",
      "options":  ["barna", "beige", "fehér", "fekete", "kék", "krém", "lila", "multi", "piros", "rózsaszín", "szürke", "terra", "zöld"]
    },
    {
      "name": "Szálmagasság",
      "options":  ["alacsony", "közepes", "magas"]
    },
    {
      "name": "Vastagság",
      "options":  ["7 mm", "12 mm", "14 mm"]
    },
    {
      "name": "Stílus",
      "options":  ["modern", "klasszikus"]
    }
  ]

  //TODO később a db, az árak number kell hogy legyen
  products = [
      {"termek_id":"41","kategoria_id":"3","nev":"Martini","db":"10","regi_ar":"0","uj_ar":"5995","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% Poliészter","mintazat":"Egyszínű","meret":"80 cm x 150 cm","szin":"barna","szalmagassag":"alacsony","vastagsag":"7 mm","stilus":"modern"},
      {"termek_id":"42","kategoria_id":"3","nev":"Kitchen","db":"5","regi_ar":"0","uj_ar":"8995","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% Poliészter","mintazat":"Egyszínű","meret":"80 cm x 150 cm","szin":"multi","szalmagassag":"alacsony","vastagsag":"7 mm","stilus":"modern"},
      {"termek_id":"43","kategoria_id":"3","nev":"Long Island","db":"6","regi_ar":"0","uj_ar":"10995","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% Poliészter","mintazat":"Mintás","meret":"80 cm x 150 cm","szin":"multi","szalmagassag":"alacsony","vastagsag":"7 mm","stilus":"modern"},
      {"termek_id":"44","kategoria_id":"3","nev":"Tequila","db":"3","regi_ar":"0","uj_ar":"28395","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% Poliészter","mintazat":"Mintás","meret":"80 cm x 150 cm","szin":"multi","szalmagassag":"közepes","vastagsag":"7 mm","stilus":"modern"},
      {"termek_id":"45","kategoria_id":"3","nev":"Electric","db":"6","regi_ar":"0","uj_ar":"36495","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% Poliészter","mintazat":"Mintás","meret":"80 cm x 150 cm","szin":"multi","szalmagassag":"közepes","vastagsag":"7 mm","stilus":"modern"},
      {"termek_id":"46","kategoria_id":"3","nev":"Goose","db":"15","regi_ar":"0","uj_ar":"21395","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% Poliészter","mintazat":"Mintás","meret":"80 cm x 150 cm","szin":"multi","szalmagassag":"közepes","vastagsag":"7 mm","stilus":"modern"},
      {"termek_id":"47","kategoria_id":"3","nev":"Gimlet","db":"24","regi_ar":"0","uj_ar":"23125","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% Poliészter","mintazat":"Mintás","meret":"80 cm x 150 cm","szin":"multi","szalmagassag":"közepes","vastagsag":"7 mm","stilus":"modern"},
      {"termek_id":"48","kategoria_id":"3","nev":"Bahama","db":"16","regi_ar":"0","uj_ar":"9995","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% Poliészter","mintazat":"Egyszínű","meret":"80 cm x 150 cm","szin":"fehér","szalmagassag":"közepes","vastagsag":"7 mm","stilus":"modern"},
      {"termek_id":"49","kategoria_id":"3","nev":"B52","db":"78","regi_ar":"0","uj_ar":"5095","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% Poliészter","mintazat":"Egyszínű","meret":"80 cm x 150 cm","szin":"multi","szalmagassag":"alacsony","vastagsag":"7 mm","stilus":"modern"},
      {"termek_id":"50","kategoria_id":"3","nev":"Espresso","db":"38","regi_ar":"0","uj_ar":"12985","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% Poliészter","mintazat":"Mintás","meret":"80 cm x 150 cm","szin":"barna","szalmagassag":"alacsony","vastagsag":"7 mm","stilus":"modern"},
      {"termek_id":"51","kategoria_id":"3","nev":"Machiato","db":"42","regi_ar":"0","uj_ar":"13995","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% Poliészter","mintazat":"Mintás","meret":"60 cm x 110 cm","szin":"beige","szalmagassag":"alacsony","vastagsag":"12 mm","stilus":"modern"},
      {"termek_id":"52","kategoria_id":"3","nev":"Luxury","db":"21","regi_ar":"0","uj_ar":"9995","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% Poliészter","mintazat":"Egyszínű","meret":"60 cm x 110 cm","szin":"krém","szalmagassag":"alacsony","vastagsag":"12 mm","stilus":"modern"},
      {"termek_id":"53","kategoria_id":"3","nev":"Treasure","db":"40","regi_ar":"0","uj_ar":"8995","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% Poliészter","mintazat":"Egyszínű","meret":"60 cm x 110 cm","szin":"rózsaszín","szalmagassag":"alacsony","vastagsag":"12 mm","stilus":"modern"},
      {"termek_id":"54","kategoria_id":"3","nev":"Bahama","db":"19","regi_ar":"0","uj_ar":"7995","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% Poliészter","mintazat":"Egyszínű","meret":"60 cm x 110 cm","szin":"fehér","szalmagassag":"alacsony","vastagsag":"12 mm","stilus":"modern"},
      {"termek_id":"55","kategoria_id":"3","nev":"Nassau","db":"40","regi_ar":"0","uj_ar":"11995","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% Poliészter","mintazat":"Mintás","meret":"60 cm x 110 cm","szin":"szürke","szalmagassag":"közepes","vastagsag":"12 mm","stilus":"modern"},
      {"termek_id":"56","kategoria_id":"3","nev":"Madagascar","db":"36","regi_ar":"0","uj_ar":"3195","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% Poliészter","mintazat":"Egyszínű","meret":"60 cm x 110 cm","szin":"zöld","szalmagassag":"közepes","vastagsag":"12 mm","stilus":"modern"},
      {"termek_id":"57","kategoria_id":"3","nev":"Scar","db":"30","regi_ar":"0","uj_ar":"13995","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% Poliészter","mintazat":"Mintás","meret":"60 cm x 110 cm","szin":"piros","szalmagassag":"alacsony","vastagsag":"12 mm","stilus":"modern"},
      {"termek_id":"58","kategoria_id":"3","nev":"Italy","db":"16","regi_ar":"0","uj_ar":"24995","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% Poliészter","mintazat":"Mintás","meret":"60 cm x 110 cm","szin":"lila","szalmagassag":"közepes","vastagsag":"12 mm","stilus":"modern"},
      {"termek_id":"59","kategoria_id":"3","nev":"France","db":"36","regi_ar":"0","uj_ar":"15995","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% Poliészter","mintazat":"Mintás","meret":"60 cm x 110 cm","szin":"kék","szalmagassag":"közepes","vastagsag":"12 mm","stilus":"modern"},
      {"termek_id":"60","kategoria_id":"3","nev":"Illusion","db":"65","regi_ar":"0","uj_ar":"10995","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% Poliészter","mintazat":"Mintás","meret":"60 cm x 110 cm","szin":"terra","szalmagassag":"alacsony","vastagsag":"12 mm","stilus":"modern"},
      {"termek_id":"61","kategoria_id":"4","nev":"Pyrite","db":"5","regi_ar":"0","uj_ar":"4355","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% polipropilén","mintazat":"Egyszínű","meret":"40 cm x 60 cm","szin":"szürke","szalmagassag":"alacsony","vastagsag":"7 mm","stilus":""},
      {"termek_id":"62","kategoria_id":"4","nev":"Calcite","db":"10","regi_ar":"0","uj_ar":"15495","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% polipropilén","mintazat":"Egyszínű","meret":"40 cm x 60 cm","szin":"lila","szalmagassag":"alacsony","vastagsag":"7 mm","stilus":""},
      {"termek_id":"63","kategoria_id":"4","nev":"Agare","db":"20","regi_ar":"0","uj_ar":"4395","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% polipropilén","mintazat":"Egyszínű","meret":"40 cm x 60 cm","szin":"zöld","szalmagassag":"alacsony","vastagsag":"7 mm","stilus":""},
      {"termek_id":"64","kategoria_id":"4","nev":"Opal","db":"30","regi_ar":"0","uj_ar":"4995","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% polipropilén","mintazat":"Egyszínű","meret":"40 cm x 60 cm","szin":"beige","szalmagassag":"alacsony","vastagsag":"7 mm","stilus":""},
      {"termek_id":"65","kategoria_id":"4","nev":"Dolomite","db":"40","regi_ar":"0","uj_ar":"3995","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% polipropilén","mintazat":"Egyszínű","meret":"40 cm x 60 cm","szin":"szürke","szalmagassag":"alacsony","vastagsag":"7 mm","stilus":""},
      {"termek_id":"66","kategoria_id":"4","nev":"Snow","db":"5","regi_ar":"0","uj_ar":"3495","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% Poliészter","mintazat":"Mintás","meret":"40 cm x 60 cm","szin":"multi","szalmagassag":"alacsony","vastagsag":"7 mm","stilus":""},
      {"termek_id":"67","kategoria_id":"4","nev":"Rainbow","db":"15","regi_ar":"0","uj_ar":"5495","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% Poliészter","mintazat":"Mintás","meret":"40 cm x 60 cm","szin":"multi","szalmagassag":"alacsony","vastagsag":"7 mm","stilus":""},
      {"termek_id":"68","kategoria_id":"4","nev":"May","db":"25","regi_ar":"0","uj_ar":"3995","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% Poliészter","mintazat":"Mintás","meret":"40 cm x 60 cm","szin":"multi","szalmagassag":"alacsony","vastagsag":"7 mm","stilus":""},
      {"termek_id":"69","kategoria_id":"4","nev":"April","db":"31","regi_ar":"0","uj_ar":"10995","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% Poliészter","mintazat":"Mintás","meret":"40 cm x 60 cm","szin":"multi","szalmagassag":"alacsony","vastagsag":"7 mm","stilus":""},
      {"termek_id":"70","kategoria_id":"4","nev":"Elementium","db":"21","regi_ar":"0","uj_ar":"12995","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% Poliészter","mintazat":"Mintás","meret":"40 cm x 60 cm","szin":"zöld","szalmagassag":"alacsony","vastagsag":"7 mm","stilus":""},
      {"termek_id":"71","kategoria_id":"4","nev":"Crystal","db":"11","regi_ar":"0","uj_ar":"11595","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% Polypropilen","mintazat":"Mintás","meret":"40 cm x 60 cm","szin":"multi","szalmagassag":"alacsony","vastagsag":"7 mm","stilus":""},
      {"termek_id":"72","kategoria_id":"4","nev":"Margaret","db":"33","regi_ar":"0","uj_ar":"12955","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% Polypropilen","mintazat":"Mintás","meret":"40 cm x 60 cm","szin":"multi","szalmagassag":"alacsony","vastagsag":"7 mm","stilus":""},
      {"termek_id":"73","kategoria_id":"4","nev":"Flower","db":"22","regi_ar":"0","uj_ar":"14385","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% Polypropilen","mintazat":"Mintás","meret":"40 cm x 60 cm","szin":"multi","szalmagassag":"alacsony","vastagsag":"7 mm","stilus":""},
      {"termek_id":"74","kategoria_id":"4","nev":"Cornflower","db":"11","regi_ar":"0","uj_ar":"9995","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% Polypropilen","mintazat":"Egyszínű","meret":"40 cm x 60 cm","szin":"kék","szalmagassag":"alacsony","vastagsag":"7 mm","stilus":""},
      {"termek_id":"75","kategoria_id":"4","nev":"Bambusa","db":"1","regi_ar":"0","uj_ar":"8995","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% Polypropilen","mintazat":"Egyszínű","meret":"40 cm x 60 cm","szin":"zöld","szalmagassag":"alacsony","vastagsag":"7 mm","stilus":""},
      {"termek_id":"76","kategoria_id":"4","nev":"Juncus","db":"4","regi_ar":"0","uj_ar":"6995","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% Poliészter","mintazat":"Egyszínű","meret":"40 cm x 60 cm","szin":"zöld","szalmagassag":"alacsony","vastagsag":"7 mm","stilus":""},
      {"termek_id":"77","kategoria_id":"4","nev":"Hedera","db":"7","regi_ar":"0","uj_ar":"7995","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% Poliészter","mintazat":"Egyszínű","meret":"40 cm x 60 cm","szin":"barna","szalmagassag":"alacsony","vastagsag":"7 mm","stilus":""},
      {"termek_id":"78","kategoria_id":"4","nev":"Chelone","db":"10","regi_ar":"0","uj_ar":"6595","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% Poliészter","mintazat":"Egyszínű","meret":"40 cm x 60 cm","szin":"lila","szalmagassag":"alacsony","vastagsag":"7 mm","stilus":""},
      {"termek_id":"79","kategoria_id":"4","nev":"Cycas","db":"13","regi_ar":"0","uj_ar":"12595","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% Poliészter","mintazat":"Egyszínű","meret":"40 cm x 60 cm","szin":"zöld","szalmagassag":"alacsony","vastagsag":"7 mm","stilus":""},
      {"termek_id":"80","kategoria_id":"4","nev":"Dahlia","db":"16","regi_ar":"0","uj_ar":"2495","ar_mod_datum":"2023-10-17","lathato":"1","anyag":"100% Poliészter","mintazat":"Egyszínű","meret":"40 cm x 60 cm","szin":"fekete","szalmagassag":"alacsony","vastagsag":"7 mm","stilus":""}
    ]    
    
    listedProducts = this.products

    pictureURL = "../../pictures/"

    categories = ["Padlószőnyeg", "Szőnyeg", "Futószőnyeg", "Lábtörlő" ]

    products2:any
    showError = false
    activeCategory = 0

    constructor(private base:BaseService){
      
      this.base.getProducts().subscribe(
        (res) => this.products2=res,
        (err) => this.showError = true
      )
    }

    changeActiveCategory(i:number){
      this.activeCategory=i
    }
}
