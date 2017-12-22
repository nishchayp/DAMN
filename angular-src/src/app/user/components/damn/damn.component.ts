import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { NetworkStatusService } from '../../services/network-status.service';
import { UserDataService } from '../../services/user-data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-damn',
  templateUrl: './damn.component.html',
  styleUrls: ['./damn.component.css']
})
export class DamnComponent implements OnInit {

  accessRequestForm: FormGroup;
  message: string;
  ssh_key: string;
  online: boolean;
  subscription: Subscription;

  constructor(
    private userDataService: UserDataService,
    private networkStatusService: NetworkStatusService
  ) { }

  ngOnInit() {
    this.online = navigator.onLine;
    this.accessRequestForm = new FormGroup({
      message: new FormControl('', [<any>Validators.maxLength(250)]),
      ssh_key: new FormControl('', [<any>Validators.required])
    });
    this.subscription = this.networkStatusService.getStatus().subscribe(() => {
      this.online = this.networkStatusService.online;
    });
  }

  makeAccessRequest(requestData) {
    if(this.isValid(requestData.ssh_key))
      this.userDataService.makeAccessRequest(requestData).subscribe(data => {
        if(data.success) {
          this.message = '';
          this.ssh_key = '';
          this.userDataService.sendAlert(data.message);
        } else
          this.userDataService.sendAlertDanger(data.message);
      });
    else
      this.userDataService.sendAlertDanger('Invalid SSH key');
  }

  isValid(ssh_key) {
    if(/^ssh-rsa AAAA[0-9A-Za-z+\/]+[=]{0,3}( [^@]+@[^@]+)?$/.test(ssh_key))
      return true;
    else
      return false;
  }

  makeAdminRequest() {
   	this.userDataService.makeAdminRequest();
  }

}
