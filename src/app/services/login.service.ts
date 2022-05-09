import {Injectable} from '@angular/core';
import User from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _user: User = {login: "kuba123", firstName: "Jakub", lastName: "Czajkowski", email: "kubaczajkowski25@gmail.com", id: "1"};
  private _logged = true;

  constructor() {
  }

  get name() {
    return this._user.firstName;
  }

  get surname() {
    return this._user.lastName;
  }

  get login() {
    return this._user.login;
  }

  get email() {
    return this._user.email;
  }

  get logged() {
    return this._logged;
  }

  set logged(logged) {
    this._logged = logged;
  }

  isLoggedIn() {
    return this._logged;
  }

  logOut() {
    this._logged = false;
  }
}
