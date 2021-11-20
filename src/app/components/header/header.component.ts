import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isFiltersOpen = false;
  public logined$ = this.loginService.logined$;

  constructor(private loginService: LoginService) {}
  logout(): void {
    this.loginService.logout();
  }

  ngOnInit(): void {}
  onSettingsClick(): void {
    this.isFiltersOpen = !this.isFiltersOpen;
  }
}
