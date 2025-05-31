import { Pipe, PipeTransform } from '@angular/core';

/**
 * filters an array based on searctext
 */
@Pipe({
   name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {
   private getValueByPath(obj: any, path: string): any {
    if (!path) return obj;

    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  }

  private predicate(value: any, searchText: string): boolean {
      return typeof value !== 'object' && typeof value !== 'undefined' && value !== null && value.toString().toLowerCase().indexOf(searchText.trim().toLowerCase()) > -1;
  }

   public transform(array: any[], searchText?: string, keyName?: string | string[]) {
      if (!array || !searchText || !Array.isArray(array)) {
         return array;
      }
      if (typeof array[0] === 'string') {
         return array.filter((item) => this.predicate(item, searchText));
      }
      // filter array, items which match and return true will be
      // kept, false will be filtered out
      if (!keyName) {
         return array.filter((item: any) => {
            for (const key in item) {
               const value = this.getValueByPath(item, key);
               if (this.predicate(value, searchText)) {
                  return true;
               }
            }
            return false;
         });
      } else {
         return array.filter((item: any) => {
            if (typeof keyName === 'string') {
               const value = this.getValueByPath(item, keyName);
               if (this.predicate(value, searchText)) {
                  return true;
               }
            } else {
               for (const key of keyName) {
                  const value = this.getValueByPath(item, key);
                  if (this.predicate(value, searchText)) {
                     return true;
                  }
               }
            }
            return false;
         });
      }

   }
}
