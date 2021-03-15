import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { JWTService } from './../../utils/jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  showErrorMessage: boolean;

  constructor(
    private loginServ: LoginService,
    private jwtServ: JWTService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.showErrorMessage = false;
  }

  login() {
    let loginObs = this.loginServ.login(this.username, this.password);
    loginObs.subscribe(
      (data) => {
        this.jwtServ.storeJWTToken(data);
        this.router.navigate(['home']);
      },
      (error) => {
        this.showErrorMessage = true;
      }
    );
  }
}
