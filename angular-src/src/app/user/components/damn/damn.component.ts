import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-damn',
  templateUrl: './damn.component.html',
  styleUrls: ['./damn.component.css']
})
export class DamnComponent implements OnInit {

  accessRequestForm: FormGroup;
  message: string;
  ssh_key: string;

  constructor(
    private userDataService: UserDataService
  ) { }

  ngOnInit() {
    this.accessRequestForm = new FormGroup({
      message: new FormControl('', [<any>Validators.maxLength(250)]),
      ssh_key: new FormControl('', [<any>Validators.required])
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
