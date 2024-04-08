import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'key'
})
export class KeyPipe implements PipeTransform {

  transform(elements:any, key: string) {
    if (!elements) return null;
    if (!key) return elements;

    return elements.filter(
      (element:any)=> element.key.toLowerCase().includes(key.toLowerCase()))
  }

}
