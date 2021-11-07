import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchSubject = new BehaviorSubject<string>('');
  public searchValue$ = this.searchSubject.asObservable();

  public inputSearch(value: string): void {
    this.searchSubject.next(value);
  }
}
