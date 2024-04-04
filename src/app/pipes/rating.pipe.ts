import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(ratings:any, productId: number) {
    if (!ratings) return null;
    if (!productId) return ratings;

    return ratings.filter(
      (rating:any)=>{return rating.product == productId}
    )
  }

}
