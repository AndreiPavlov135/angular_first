import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '../models/search-item.model';

@Pipe({
  name: 'sortingDate',
})
export class SortingDatePipe implements PipeTransform {
  transform(
    items: ISearchItem[],
    sortByDate: boolean,
    reversDate: boolean
  ): ISearchItem[] {
    const newItems = [...items];
    if (sortByDate && reversDate)
      return newItems.sort((a, b) => {
        return (
          +new Date(b.snippet.publishedAt) - +new Date(a.snippet.publishedAt)
        );
      });
    if (sortByDate && !reversDate)
      return newItems.sort((a, b) => {
        return (
          +new Date(a.snippet.publishedAt) - +new Date(b.snippet.publishedAt)
        );
      });
    return newItems;
  }
}
