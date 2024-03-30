import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(products:any, category:number) {
    if (!products) return null;
    if (!category) return products;

    return products.filter(
      (product:any)=>{return product.category == category}
    )
  }

}
