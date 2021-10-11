import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() inputClick = new EventEmitter<boolean>();
  @Output() inputValueChange = new EventEmitter<string>();
  @Output() clickDate = new EventEmitter<boolean>();
  @Output() clickReset = new EventEmitter<boolean>();
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
  myInpytClick(isOpen: boolean): void {
    this.inputClick.next(isOpen);
  }
  myInputValue(event: string): void {
    this.inputValueChange.next(event);
  }
  myClickDate(event: boolean): void {
    this.clickDate.next(event);
  }
  myClickReset(event: boolean): void {
    this.clickReset.next(event);
  }
}
