import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthService {

  user: any;

  constructor(
    private http: Http,
    private cookieService: CookieService
  ) { }

  loggedIn() {
    if(this.cookieService.check('googCookie'))
      return true;
    else
      return false;
  }

}