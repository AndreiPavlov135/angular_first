import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MainGuard implements CanActivate {
  constructor(private router: Router) {}
  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.isLoggedIn()) return true;
    this.router.navigate(['login']);
    return false;
  }

  public isLoggedIn(): boolean {
    let status = false;
    // if (localStorage.getItem('user') === 'loggedin') status = !status;
    // return status;
    return localStorage.getItem('user') === 'loggedin' ? !status : status;
  }
}
