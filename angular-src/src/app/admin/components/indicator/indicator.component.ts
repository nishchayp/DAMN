import { Component, OnInit } from '@angular/core';

import { NetworkStatusService } from '../../services/network-status.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'admin-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css']
})
export class IndicatorComponent implements OnInit {

  online: boolean;
  subscription: Subscription;

  constructor(
    private networkStatusService: NetworkStatusService
  ) { }

  ngOnInit() {
    this.online = navigator.onLine;
    window.addEventListener('online',  () => {
      this.networkStatusService.setStatus(true)
      if(navigator.serviceWorker.controller)
        navigator.serviceWorker.controller.postMessage({
            command: 'online'
        });
    });
    window.addEventListener('offline', () => {this.networkStatusService.setStatus(false)});
    this.subscription = this.networkStatusService.getStatus().subscribe(() => {
      this.online = this.networkStatusService.online;
    });
  }

}

