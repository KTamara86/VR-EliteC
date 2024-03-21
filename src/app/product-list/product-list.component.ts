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
    pictureURL = "../../pictures/"

    categories = ["Padlószőnyeg", "Szőnyeg", "Futószőnyeg", "Lábtörlő" ]

    products2:any
    showError = false
    activeCategory = 0
    showedProducts:any

    constructor(private base:BaseService){
      
      this.base.getProducts().subscribe(
        (res) => {
          this.products2=res
          this.setShowedProducts()
        },
        (err) => this.showError = true
      )
    }

    changeActiveCategory(i:number){
      this.activeCategory=i
      this.setShowedProducts()
    }

    setShowedProducts(){
      let prodArray = []
      let prods = this.products2[this.categories[this.activeCategory]]

      for (const key in prods){
        let element =prods[key]

        if(key != "0"){
          element.key = key
          prodArray.push(element)
        }
      }
      this.showedProducts=prodArray
    }
}
