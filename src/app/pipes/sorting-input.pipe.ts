import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '../models/search-item.model';

@Pipe({
  name: 'sortingInput'
})

export class SortingInputPipe implements PipeTransform {

  transform(items: ISearchItem[], field: string): ISearchItem[] {
    if(!items) return [];

    if(field) {
      items = items.filter(item => item.snippet.title.toLowerCase().includes(field.toLowerCase()));
    }
    return items;
  }

}
