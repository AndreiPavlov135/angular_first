import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  private filtersSubject = new BehaviorSubject<string>('');
  public inputValue$ = this.filtersSubject.asObservable();

  constructor() {}

  public inputCheck(value: string): void {
    this.filtersSubject.next(value);
  }
}
