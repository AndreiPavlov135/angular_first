import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  public login: string = '';
  public password: string = '';
  public show!: boolean;

  constructor(private loginService: LoginService, private router: Router) {
    if (this.loginService.loggedIn) {
      this.router.navigate(['main']);
    }
  }

  public onLoginInput(event: any) {
    this.login = event.target.value;
  }
  public onPasswordInput(event: any) {
    this.password = event.target.value;
  }

  public auth(): void {
    if (this.login !== '' && this.password !== '') {
      this.show = true;
      this.loginService.auth(this.login, this.password, this.show);
      this.router.navigate(['main']);
    } else {
      alert('Enter login and password');
    }
  }
  ngOnInit(): void {}
}
