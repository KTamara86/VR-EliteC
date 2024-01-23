import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product={
    "termek_id":49,
    "kategoria_id":3,
    "nev":"B52",
    "db":78,
    "regi_ar":0,
    "uj_ar":5095,
    "ar_mod_datum":"2023-10-17",
    "lathato":"1",
    "anyag":"100% Poliészter",
    "mintazat":"Egyszínű",
    "meret":"80 cm x 150 cm",
    "szin":"multi",
    "szalmagassag":"alacsony",
    "vastagsag":"7 mm",
    "stilus":"modern"
  }

  categories= ["üres", "Padlószőnyeg", "Szőnyeg", "Futószőnyeg", "Lábtörlő"]


}
