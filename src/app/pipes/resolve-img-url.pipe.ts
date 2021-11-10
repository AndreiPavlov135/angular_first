import { Pipe, PipeTransform } from '@angular/core';
import { IThumbnails } from '../models/search-item.model';
@Pipe({
  name: 'resolveImgUrl',
})
export class ResolveImgUrlPipe implements PipeTransform {
  transform(value: IThumbnails): string {
    return value?.standard?.url || value?.high?.url || value?.medium?.url;
  }
}
