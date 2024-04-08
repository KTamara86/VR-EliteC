import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  searchArgs = ""

  newProduct = {
    key: "",
    anyag: "",
    db: "",
    lathato: "",
    meret: "",
    mintazat: "",
    nev: "",
    stilus: "",
    szalmagassag: "",
    szin: "",
    uj_ar: "",
    vastagsag: ""
  }

  props = {
    anyag: ["100% Poliészter", "100% polipropilén", "100% polyester", "100% Polypropilen", "100% PP Heatset"],
    mintazat: ["Egyszínű", "mintás"],
    meret: ["80 cm x 150 cm", "200 cm x 290 cm", "160 cm x 230 cm", "120 cm x 170 cm", "40 cm x 60 cm", "60 cm x 110 cm"],
    szin: ["barna", "beige", "fehér", "fekete", "kék", "krém", "lila", "multi", "piros", "rózsaszín", "szürke", "terra", "zöld"],
    szalmagassag: ["alacsony", "közepes", "magas"],
    vastagsag: ["7 mm", "12 mm", "14 mm"],
    stilus: ["modern", "klasszikus"]
  }

  // props = [
  //   {
  //     "key": "anyag",
  //     "name": "Anyag",
  //     "options":  ["100% Poliészter", "100% polipropilén", "100% polyester", "100% Polypropilen", "100% PP Heatset"]
  //   },
  //   {
  //     "key": "mintazat",
  //     "name": "Mintázat",
  //     "options":  ["Egyszínű", "mintás"]
  //   },
  //   {
  //     "key": "meret",
  //     "name": "Méret",
  //     "options":  ["80 cm x 150 cm", "200 cm x 290 cm", "160 cm x 230 cm", "120 cm x 170 cm", "40 cm x 60 cm", "60 cm x 110 cm"]
  //   },
  //   {
  //     "key": "szin",
  //     "name": "Szín",
  //     "options":  ["barna", "beige", "fehér", "fekete", "kék", "krém", "lila", "multi", "piros", "rózsaszín", "szürke", "terra", "zöld"]
  //   },
  //   {
  //     "key": "szalmagassag",
  //     "name": "Szálmagasság",
  //     "options":  ["alacsony", "közepes", "magas"]
  //   },
  //   {
  //     "key": "vastagsag",
  //     "name": "Vastagság",
  //     "options":  ["7 mm", "12 mm", "14 mm"]
  //   },
  //   {
  //     "key": "stilus",
  //     "name": "Stílus",
  //     "options":  ["modern", "klasszikus"]
  //   }]

  postProduct(){
    //funkciót kiépítése
  }
}
