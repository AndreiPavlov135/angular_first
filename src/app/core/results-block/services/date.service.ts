import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  private sortSubject = new BehaviorSubject<boolean | null>(null);
  private resetSubject = new Subject<void>();

  public sorted$ = this.sortSubject.asObservable();
  public reseted$ = this.resetSubject.asObservable();

  constructor() {}

  public sort(sortDate: boolean): void {
    this.sortSubject.next(sortDate);
  }
  public reset(): void {
    this.resetSubject.next();
  }
}
