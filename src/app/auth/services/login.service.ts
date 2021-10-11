import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginedSubject = new BehaviorSubject<boolean>(false);
  public logined$ = this.loginedSubject.asObservable();

  constructor(private router: Router) {}

  public auth(username: string, password: string, show: boolean): boolean {
    localStorage.setItem('user', 'loggedin');
    this.loginedSubject.next(show);
    return true;
  }

  public logout(): void {
    localStorage.clear();
    localStorage.removeItem('user');
    this.router.navigateByUrl('/login');
    this.loginedSubject.next(false);
  }

  public get loggedIn(): boolean {
    return localStorage.getItem('user') !== null;
  }
}
