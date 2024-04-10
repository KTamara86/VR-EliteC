import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: any, expression: any) {
    if (!products) return null;
    if (!expression) return products;

    return products.filter(
      (product: any) => product.nev.toLowerCase().includes(expression.toLowerCase()));
  }

}
