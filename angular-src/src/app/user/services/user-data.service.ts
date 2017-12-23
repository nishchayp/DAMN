import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class UserDataService {

  snackbarMessage: string;
  snackbarType: boolean;

  private snackbarSubject = new Subject<any>();

  constructor(private http: Http) { }

  makeAdminRequest() {
    if(!navigator.onLine)
      this.sendAlert('Request will be sent');
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get('/makeAdminRequest', { headers: headers, withCredentials: true })
    .map(res => res.json()).subscribe(data => {
      if(data.success)
        this.sendAlert(data.message);
      else
        this.sendAlertDanger(data.message);
    });
  }

  makeAccessRequest(requestData) {
    if(!navigator.onLine)
      this.sendAlert('Request will be sent');
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post('/makeAccessRequest/', requestData, { headers: headers, withCredentials: true })
    .map(res => res.json())
  }

  sendAlert(message) {
    this.snackbarMessage = message;
    this.snackbarType = true;
    this.sendSnackbarData();
  }

  sendAlertDanger(message) {
    this.snackbarMessage = message;
    this.snackbarType = false;
    this.sendSnackbarData();
  }

  private sendSnackbarData() {
    this.snackbarSubject.next();
  }

  getSnackbarData(): Observable<any> {
    return this.snackbarSubject.asObservable();
  }

}
