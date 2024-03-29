import { Component } from '@angular/core';
import { BaseService } from '../services/base.service';
import { CartService } from '../services/cart.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  activeFilters = ["", "", "", "", "", "", ""]
  expression = ""

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

  constructor(private base:BaseService, private cartService:CartService, private searchService: SearchService){
    
    this.base.getProducts().subscribe(
      (res) => {
        this.products=res
        this.setShowedProducts()
        this.setChoosenProduct(this.showedProducts[1])
      },
      (err) => this.showError = true
    )
    this.searchService.getSearchTerm().subscribe(
      (res) => this.expression = res
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
    this.clearFilters()
    this.expression = ""
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
  }

  setChoosenProduct(product: any){
    this.choosenProduct = product
  }

  getChossenProduct(){
    return this.choosenProduct
  }

  filterProducts(){
    let prodArray = []
    let prods = this.products[this.categories[this.activeCategory]]
    for(const key in prods){
      let element = prods[key]

      if(key != "0"){
        let props = [ element.anyag, element.mintazat, element.meret, element.szin, element.vastagsag, element.szalmagassag, element.stilus ]
        let success = false
        for (let i = 0; i < props.length; i++) {
          let prop = props[i];
          let filterValue = this.activeFilters[i]
          if(filterValue && prop){
            if(filterValue !== prop){
              success = false
              break
            }
            else {
              success = true
            }
          }
        }
        if(success){
          prodArray.push(element)
        }
      }
    }
    this.showedProducts=prodArray
    console.log(this.activeFilters)
    console.log(this.showedProducts)
  }

  changeFilter(newValue: any) {
    let filterIndex = newValue[0]
    let filterValue = newValue[1]
    
    this.activeFilters[filterIndex] = filterValue
    this.filterProducts()
  }

  clearFilters(){
    for (let i = 0; i < this.activeFilters.length; i++) {
      this.activeFilters[i] = ""
    }
    this.setShowedProducts()
  }
}
