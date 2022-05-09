import {Component, OnInit} from '@angular/core';
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  name: String = "";
  surname: String = "";

  constructor(private loginService: LoginService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.name = this.loginService.name;
    this.surname = this.loginService.surname;
  }

  isUserLogged() {
    return this.loginService.isLoggedIn();
  }

  goToDashboard(){
    this.router.navigate(["/twoje_wydatki"])
  }

  goToSettings(){
    this.router.navigate(["/ustawienia"])
  }

  goToLogin() {
    this.router.navigate(["/logowanie"])
  }

  goToHome() {
    this.router.navigate(["/strona_domowa"])
  }

  goToContact() {
    this.router.navigate(["/kontakt"])
  }

  logOut(){
    this.loginService.logOut();
  }
}
