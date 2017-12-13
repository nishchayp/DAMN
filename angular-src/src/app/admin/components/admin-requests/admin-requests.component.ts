import { Component, OnInit } from '@angular/core';
import { AdminDataService } from '../../services/admin-data.service';
import { AdminRequest } from '../../app.interfaces';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'admin-admin-requests',
  templateUrl: './admin-requests.component.html',
  styleUrls: ['./admin-requests.component.css', '../../app.component.css']
})
export class AdminRequestsComponent implements OnInit {

  adminRequests: AdminRequest[];
  subscription: Subscription;

  constructor(
    private adminDataService: AdminDataService
  ) { }

  ngOnInit() {
  	this.adminRequests = this.adminDataService.adminRequests;
    this.adminDataService.changeHeading('Admin Requests');
    this.subscription = this.adminDataService.getInfo().subscribe(() => {
      this.adminRequests = this.adminDataService.adminRequests;
    });
    this.adminDataService.getAdminRequests();
  }
  
  accept(id, index) {
    this.adminDataService.acceptAdminRequests(id, index);
  }

  reject(id, index) {
    this.adminDataService.rejectAdminRequests(id, index);
  }

}
