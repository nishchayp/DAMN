import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NetworkStatusService {

  online: boolean;
  private statusSubject = new Subject<any>();

  constructor() { }

  setStatus(status) {
  	 this.online = status;
  	 this.sendStatus();
  }

  private sendStatus() {
    this.statusSubject.next();
  }

  getStatus(): Observable<any> {
    return this.statusSubject.asObservable();
  }

}
