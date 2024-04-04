import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: any, expression: any, category: number) {
    if (!products) return null;
    if (!expression || !category) return products;

    let data = products.filter(
      (product: any) => product.nev.toLowerCase().includes(expression.toLowerCase()));

    return data.filter(
      (product: any) => (product.nev.toLowerCase().includes(expression.toLowerCase()))
    );
  }

}
