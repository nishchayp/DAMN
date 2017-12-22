import { Component, OnInit } from '@angular/core';

import { NetworkStatusService } from '../../services/network-status.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  online: boolean;
  subscription: Subscription;

  constructor(
    private networkStatusService: NetworkStatusService
  ) { }

  ngOnInit() {
    this.online = navigator.onLine;
    this.subscription = this.networkStatusService.getStatus().subscribe(() => {
      this.online = this.networkStatusService.online;
    });
  }

}
