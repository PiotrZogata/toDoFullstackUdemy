import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'in28minutes';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  // Router
  // Angular give me Router
  // Depenency Injection
  constructor(private router: Router, private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    // if (this.username === 'in28minutes' && this.password === 'dummy'){
      if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
       // Redirect to Welcome page
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;  // can it errase?
    } else {
      this.invalidLogin = true;
    }

  }

}
