import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Access, Admin, AccessRequest, AdminRequest, ModalData } from '../app.interfaces';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class AdminDataService {

  accesses: Access[];
  admins: Admin[];
  accessRequests: AccessRequest[];
  adminRequests: AdminRequest[];
  modalData: ModalData;
  snackbarMessage: string;
  snackbarType: boolean;
  heading: string;

  private infoSubject = new Subject<any>();
  private modalSubject = new Subject<any>();
  private snackbarSubject = new Subject<any>();
  private headingSubject = new Subject<any>();

  constructor(private http: Http) { }

  private sendInfo() {
    this.infoSubject.next();
  }

  getInfo(): Observable<any> {
    return this.infoSubject.asObservable();
  }

  getAccesses() {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get('/admin/getAccesses', { headers: headers, withCredentials: true })
    .map(res => res.json()).subscribe(data => {
      if(data.success) {
        this.accesses = JSON.parse(data.message);
        this.sendInfo();
      } else {
        this.sendAlertDanger(data.message);
      }
    });
  }

  getAdmins() {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get('/admin/getAdmins', { headers: headers, withCredentials: true })
    .map(res => res.json()).subscribe(data => {
      if(data.success) {
        this.admins = JSON.parse(data.message);
        this.sendInfo();
      } else {
        this.sendAlertDanger(data.message);
      }
    });
  }

  getAccessRequests() {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get('/admin/getAccessRequests', { headers: headers, withCredentials: true })
    .map(res => res.json()).subscribe(data => {
      if(data.success) {
        this.accessRequests = JSON.parse(data.message);
        this.sendInfo();
      } else {
        this.sendAlertDanger(data.message);
      }
    });
  }

  getAdminRequests() {
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.get('/admin/getAdminRequests', { headers: headers, withCredentials: true })
    .map(res => res.json()).subscribe(data => {
      if(data.success) {
        this.adminRequests = JSON.parse(data.message);
        this.sendInfo();
      } else {
        this.sendAlertDanger(data.message);
      }
    });
  }

  changeHeading(heading) {
    this.heading = heading;
    this.sendHeadingData();
  }

  private sendHeadingData() {
    this.headingSubject.next();
  }

  getHeadingData(): Observable<any> {
    return this.headingSubject.asObservable();
  }

  openModal(data, modalfor, index) {
    this.modalData = { ...data, id: !!data.access_id ? data.access_id : data.access_request_id, modalfor, index};
    this.sendModalData();
  }

  private sendModalData() {
    this.modalSubject.next();
  }

  getModalData(): Observable<any> {
    return this.modalSubject.asObservable();
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

  acceptAdminRequests(id, index) {
    if(!navigator.onLine)
      this.sendAlert('Request will be accepted');
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    this.http.get('/admin/acceptAdminRequest/' + id, { headers: headers, withCredentials: true })
    .map(res => res.json()).subscribe(data => {
      if(data.success) {
        this.adminRequests.splice(index, 1);
        this.sendAlert(data.message);
      } else
        this.sendAlertDanger(data.message);
    });
  }

  rejectAdminRequests(id, index) {
    if(!navigator.onLine)
      this.sendAlert('Request will be rejected');
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    this.http.get('/admin/rejectAdminRequest/' + id, { headers: headers, withCredentials: true })
    .map(res => res.json()).subscribe(data => {
      if(data.success) {
        this.adminRequests.splice(index, 1);
        this.sendAlert(data.message);
      } else
        this.sendAlertDanger(data.message);
    });
  }

  revokeAdminPrivilege(id, index) {
    if(!navigator.onLine)
      this.sendAlert('Privileges will be revoked');
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    this.http.get('/admin/revokeAdminPrivilege/' + id, { headers: headers, withCredentials: true })
    .map(res => res.json()).subscribe(data => {
      if(data.success) {
        this.admins.splice(index, 1);
        this.sendAlert(data.message);
      } else
        this.sendAlertDanger(data.message);
    });
  }

  revokeAccessPrivilege(id, index) {
    if(!navigator.onLine)
      this.sendAlert('Access will be revoked');
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    this.http.get('/admin/revokeAccessPrivilege/' + id, { headers: headers, withCredentials: true })
    .map(res => res.json()).subscribe(data => {
      if(data.success) {
        console.log('asd');
        this.accesses.splice(index, 1);
        this.sendAlert(data.message);
      } else
        this.sendAlertDanger(data.message);
    });
  }

  rejectAccessRequest(id, index) {
    if(!navigator.onLine)
      this.sendAlert('Request will be rejected');
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    this.http.get('/admin/rejectAccessRequest/' + id, { headers: headers, withCredentials: true })
    .map(res => res.json()).subscribe(data => {
      if(data.success) {
        this.accessRequests.splice(index, 1);
        this.sendAlert(data.message);
      } else
        this.sendAlertDanger(data.message);
    });
  }

  acceptAccessRequest(ip, id, index) {
    if(!navigator.onLine)
      this.sendAlert('Request will be accepted');
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    this.http.post('/admin/acceptAccessRequest/' + id, ip, { headers: headers, withCredentials: true })
    .map(res => res.json()).subscribe(data => {
      if(data.success) {
        this.accessRequests.splice(index, 1);
        this.sendAlert(data.message);
      } else
        this.sendAlertDanger(data.message);
    });
  }

}
