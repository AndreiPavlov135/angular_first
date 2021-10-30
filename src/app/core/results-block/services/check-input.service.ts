import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckInputService {
  private inputSubject = new BehaviorSubject<boolean>(false);
  public inputed$ = this.inputSubject.asObservable();
  constructor() {}

  public check(): void {
    this.inputSubject.next(true);
  }
  public checkOut(): void {
    this.inputSubject.next(false);
  }
}
