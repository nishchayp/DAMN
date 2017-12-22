import { Component, OnInit } from '@angular/core';

import { NetworkStatusService } from '../../services/network-status.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'admin-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navOpen: boolean;
  online: boolean;
  subscription: Subscription;

  constructor(
    private networkStatusService: NetworkStatusService
  ) { }

  ngOnInit() {
    this.online = navigator.onLine;
    this.navOpen = false;
    this.subscription = this.networkStatusService.getStatus().subscribe(() => {
      this.online = this.networkStatusService.online;
    });
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
  }

  closeNav() {
  	this.navOpen = false;
  }

  openNav() {
  	this.navOpen = true;
  }

}