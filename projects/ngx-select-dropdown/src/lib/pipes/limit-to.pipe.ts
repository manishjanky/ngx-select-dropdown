import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {
  public transform(array: any[], itemsCount: number, startIndex = 0) {
    if (!Array.isArray(array) || itemsCount === 0) {
      return array;
    }
    return array.slice(startIndex, startIndex + itemsCount);
  }
}
