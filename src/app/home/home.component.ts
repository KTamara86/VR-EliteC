import { Component } from '@angular/core';
import { BaseService } from '../services/base.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  activeFilters = ["", "", "", "", "", "", ""]
  filters: { [key: string]: string } = {
    ["anyag"]: "",
    ["mintazat"]: "",
    ["meret"]: "",
    ["szin"]: "",
    ["szalmagassag"]: "",
    ["vastagsag"]: "",
    ["stilus"]: ""
  };

  szurok = [
    {
      "key": "anyag",
      "name": "Anyag",
      "options":  ["100% Poliészter", "100% polipropilén", "100% polyester", "100% Polypropilen", "100% PP Heatset"]
    },
    {
      "key": "mintazat",
      "name": "Mintázat",
      "options":  ["Egyszínű", "mintás"]
    },
    {
      "key": "meret",
      "name": "Méret",
      "options":  ["80 cm x 150 cm", "200 cm x 290 cm", "160 cm x 230 cm", "120 cm x 170 cm", "40 cm x 60 cm", "60 cm x 110 cm"]
    },
    {
      "key": "szin",
      "name": "Szín",
      "options":  ["barna", "beige", "fehér", "fekete", "kék", "krém", "lila", "multi", "piros", "rózsaszín", "szürke", "terra", "zöld"]
    },
    {
      "key": "szalmagassag",
      "name": "Szálmagasság",
      "options":  ["alacsony", "közepes", "magas"]
    },
    {
      "key": "vastagsag",
      "name": "Vastagság",
      "options":  ["7 mm", "12 mm", "14 mm"]
    },
    {
      "key": "stilus",
      "name": "Stílus",
      "options":  ["modern", "klasszikus"]
    }
  ]
  pictureURL = "../../pictures/"

  categories = ["Padlószőnyeg", "Szőnyeg", "Futószőnyeg", "Lábtörlő" ]

  products:any
  showError = false
  activeCategory = 0
  showedProducts:any
  choosenProduct:any

  constructor(private base:BaseService, private cartService:CartService){
    
    this.base.getProducts().subscribe(
      (res) => {
        this.products=res
        this.setShowedProducts()
        this.setChoosenProduct(this.showedProducts[1])
      },
      (err) => this.showError = true
    )
  }

  addToCart(product:any){
    let body:any = []
    body.key = product.key
    body.price = product.uj_ar
    body.qty = 1
    body.name = product.nev
    this.cartService.addProduct(body)
  }

  changeActiveCategory(i:number){
    this.activeCategory=i
    this.setShowedProducts()
  }

  setShowedProducts(){
    let prodArray = []
    let prods = this.products[this.categories[this.activeCategory]]

    for (const key in prods){
      let element =prods[key]

      if(key != "0"){
        element.key = key
        prodArray.push(element)
      }
    }
    this.showedProducts=prodArray
    console.log(this.showedProducts)
  }

  setChoosenProduct(product: any){
    this.choosenProduct = product
  }

  getChossenProduct(){
    return this.choosenProduct
  }

  // filterProducts(){
  //   let prodArray = []
  //   let prods = this.products[this.categories[this.activeCategory]]
  //   for(const key in prods){
  //     let element = prods[key]
  //     let result = true

  //     console.log(element.szin)
  //     if(key != "0" && element["anyag"] === this.filters["anyag"] && element["mintazat"] === this.filters["mintazat"] && element["meret"] === this.filters["meret"] &&
  //       element["meret"] === this.filters["meret"] && element["szin"] === this.filters["szin"] && element["szalmagassag"] === this.filters["szalmagassag"] && 
  //       element["vastagsag"] === this.filters["vastagsag"] && element["stilus"] === this.filters["stilus"]){
  //         console.log(element["szin"])
  //         console.log(this.filters["szin"])
  //         prodArray.push(element)
  //     }
      
  //     console.log(prodArray)
  //   }
  // }

  changeFilter(newValue: any) {
    // for (const filter in this.filters) {
    //   if (filter === newValue[1]) {
    //     this.filters[filter] = newValue[0];
    //   }
    //   else {
    //     this.filters[newValue[1]] = newValue[0];
    //   }
    // }
    // console.log(this.filters)
    // this.filterProducts()
  }
}
