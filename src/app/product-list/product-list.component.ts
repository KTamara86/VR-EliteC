import { Component } from '@angular/core';

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
}
