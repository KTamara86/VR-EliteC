import { Component } from '@angular/core';
import { format } from 'date-fns';
import { ToastrService } from 'ngx-toastr';
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
    vastagsag: "",
    category: ""
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
  choosenProduct:any = {key: 0 }
  categories = ["Padlószőnyeg", "Szőnyeg", "Futószőnyeg", "Lábtörlő" ]
  activeCategory = 0
  plusQty = 0

  constructor(private base: BaseService, private toastr:ToastrService){
    this.base.getProducts().subscribe(
      (res) => {
        this.products=res
        this.setShowedProducts()
      }
    )
  }

  ngOnInit(){
    this.base.reload()
  }

  setShowedProducts(){
    let prodArray = []
    let prods = this.products[this.categories[this.activeCategory]]

    for (const key in prods){
      let element =prods[key]

      if(key != "0"){
        element.key = key
        element.regi_ar = element.uj_ar
        prodArray.push(element)
      }
    }
    this.showedProducts=prodArray
  }

  setChoosenProduct(product: any){
    this.choosenProduct = product
  }

  changeActiveCategory(i:number){
    this.activeCategory=i
    this.searchArgs = ""
    this.setShowedProducts()
  }

  setNewProdToDefault(){
    this.newProduct = {
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
      vastagsag: "",
      category: ""
    }
  }
  
  qtyPlus(){
    let category = this.categories[this.activeCategory]
    let key = this.choosenProduct.key
    let body = {
      anyag: this.choosenProduct.anyag,
      ar_mod_datum: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      db: Number(this.choosenProduct.db) + Number(this.plusQty),
      lathato: this.choosenProduct.lathato,
      meret: this.choosenProduct.meret,
      mintazat: this.choosenProduct.mintazat,
      nev: this.choosenProduct.nev,
      regi_ar: this.choosenProduct.regi_ar,
      stilus: this.choosenProduct.stilus,
      szalmagassag: this.choosenProduct.szalmagassag,
      szin: this.choosenProduct.szin,
      uj_ar: this.choosenProduct.uj_ar,
      vastagsag: this.choosenProduct.vastagsag
    }

    this.base.writeProductData(body, key, category).then(
      (res) => {
        this.toastMsgOutlet(res, "plusqty")
        this.choosenProduct.key = 0
        this.plusQty = 0
      } 
    )
  }

  postProduct(){
    let category = this.newProduct.category
    let body = {
      anyag: this.newProduct.anyag,
      ar_mod_datum: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      db: this.newProduct.db,
      lathato: this.newProduct.lathato,
      meret: this.newProduct.meret,
      mintazat: this.newProduct.mintazat,
      nev: this.newProduct.nev,
      regi_ar: 0,
      stilus: this.newProduct.stilus,
      szalmagassag: this.newProduct.szalmagassag,
      szin: this.newProduct.szin,
      uj_ar: this.newProduct.uj_ar,
      vastagsag: this.newProduct.vastagsag
    }

    this.base.postProduct(body, category).then(
      (res) => {
        this.toastMsgOutlet(res, "push")
        this.setNewProdToDefault()
      }
    )
  }

  deleteProduct(){
    let category = this.categories[this.activeCategory]
    let key = this.choosenProduct.key
    this.base.deleteProduct(key, category).then(
      (res) => {
        this.toastMsgOutlet(res, "delete")
        this.choosenProduct.key = 0
      }
    )
  }

  modifyProduct(){
    let category = this.categories[this.activeCategory]
    let key = this.choosenProduct.key
    let body = {
      anyag: (this.choosenProduct.anyag ? this.choosenProduct.anyag : ""),
      ar_mod_datum: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      db: (this.choosenProduct.db ?  this.choosenProduct.db : ""),
      lathato: (this.choosenProduct.lathato ? this.choosenProduct.lathato : 0),
      meret: (this.choosenProduct.meret ? this.choosenProduct.meret : ""),
      mintazat: (this.choosenProduct.mintazat ? this.choosenProduct.mintazat : ""),
      nev: (this.choosenProduct.nev ? this.choosenProduct.nev : "Unknown"),
      regi_ar: this.choosenProduct.regi_ar,
      stilus: (this.choosenProduct.stilus ? this.choosenProduct.stilus : ""),
      szalmagassag: (this.choosenProduct.szalmagassag ? this.choosenProduct.szalmagassag : ""),
      szin: (this.choosenProduct.szin ? this.choosenProduct.szin : ""),
      uj_ar: (this.choosenProduct.uj_ar ? this.choosenProduct.uj_ar : 999999),
      vastagsag: (this.choosenProduct.vastagsag ?  this.choosenProduct.vastagsag : "")
    }
    this.base.writeProductData(body, key, category).then(
      (res) => {
        this.toastMsgOutlet(res, "modify")
        this.choosenProduct.key = 0
      } 
    )
  }

  toastMsgOutlet(result:boolean, type:string){
    let toastBodyTxt = ""
    let props:any = {
      closeButton: true,
      timeOut: 2000,
      progressBar: true,
      progressAnimation: "decreasing",
      positionClass: "toast-top-right",
      newestOnTop: true
    }

    if(type == "modify") toastBodyTxt = "Sikeres adatmódosítás!"
  
    else if(type == "modify" && !result){
      toastBodyTxt = "Valami hiba lépett fel, próbálkozz később!"
    }
    else if(type == "delete" && result){
      toastBodyTxt = "Sikeresen törölted a rendelést"
    }
    else if(type == "delete" && !result){
      toastBodyTxt = "Valami hiba lépett fel, próbálkozz később!"
    }
    
    if(result){
      if(type == "modify") toastBodyTxt = "Sikeres adatmódosítás!"
      else if(type == "delete") toastBodyTxt = "Sikeres törlés!"
      else if(type == "push") toastBodyTxt = "Sikeres termékfeltöltés!"
      else if(type == "plusqty") toastBodyTxt = "Sikeresen módosítottad a készletet!"
      this.toastr.info(toastBodyTxt, "SIKER", props)
    }
    else{
      toastBodyTxt = "Sajnos nem sikerült a művelet!"
      this.toastr.warning(toastBodyTxt, "HIBA", props)
    }
  }
}
