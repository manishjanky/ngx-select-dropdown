import { Pipe, PipeTransform } from '@angular/core';

/**
 * filters an array based on searctext
 */
@Pipe({
   name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {
   public transform(array: any[], searchText?: string, keyName?: string) {
      if (!array || !searchText || !Array.isArray(array)) {
         return array;
      }
      if (typeof array[0] === 'string') {
         return array.filter((item) => item.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
      }
      // filter array, items which match and return true will be
      // kept, false will be filtered out
      if (!keyName) {
         return array.filter((item: any) => {
            for (const key in item) {
               if (typeof item[key] !== 'object' && item[key].toString().toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
                  return true;
               }
            }
            return false;
         });
      } else {
         return array.filter((item: any) => {
            if (typeof item[keyName] !== 'object' && item[keyName].toString().toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
               return true;
            }
            return false;
         });
      }

   }
}
