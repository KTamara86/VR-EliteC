import { Component } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

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

  products:any
  showedProducts:any
  choosenProduct:any = {key: 1 }
  categories = ["Padlószőnyeg", "Szőnyeg", "Futószőnyeg", "Lábtörlő" ]
  activeCategory = 0
  plusQty = 0

  constructor(private base: BaseService){
    this.base.getProducts().subscribe(
      (res) => {
        this.products=res

        this.setShowedProducts()
        this.setChoosenProduct(this.showedProducts[1])
      }
    )
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

  changeActiveCategory(i:number){
    this.activeCategory=i
    this.searchArgs = ""
  }
  
  qtyPlus(){
    
  }

  postProduct(){
    //TODO: funkciót kiépítése
  }

  deleteProduct(){
    //TODO: funkciót kiépítése
  }

  modifyProduct(){
    //TODO: funkciót kiépítése
  }

  toastMsgOutlet(){
    //TODO: funkciót kiépíteni
  }
}
