import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IDateAction } from 'src/app/models/date-action.model';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  private actionSubject = new BehaviorSubject<IDateAction>({
    sortByDate: false,
    revers: false,
  });

  public action$ = this.actionSubject.asObservable();

  public sortByDate(newSortByDate: boolean): void {
    const oldAction = this.actionSubject.value;
    const newAction = {
      sortByDate: newSortByDate,
      revers: oldAction.revers,
    };
    this.actionSubject.next(newAction);
  }

  public reset(): void {
    const action = this.actionSubject.value;
    this.actionSubject.next({
      ...action,
      sortByDate: false,
    });
  }

  public revers(revers: boolean): void {
    const action = this.actionSubject.value;
    this.actionSubject.next({
      ...action,
      revers,
    });
  }
}
