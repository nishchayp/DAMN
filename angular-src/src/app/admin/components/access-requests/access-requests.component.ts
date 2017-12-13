import { Component, OnInit } from '@angular/core';
import { AdminDataService } from '../../services/admin-data.service';
import { AccessRequest } from '../../app.interfaces';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'admin-access-requests',
  templateUrl: './access-requests.component.html',
  styleUrls: ['./access-requests.component.css', '../../app.component.css']
})
export class AccessRequestsComponent implements OnInit {

  accessRequests: AccessRequest[];
  subscription: Subscription;

  constructor(
    private adminDataService: AdminDataService
  ) { }

  ngOnInit() {
    this.accessRequests = this.adminDataService.accessRequests;
    this.adminDataService.changeHeading('Accesses Requests');
    this.subscription = this.adminDataService.getInfo().subscribe(() => {
      this.accessRequests = this.adminDataService.accessRequests;
    });
    this.adminDataService.getAccessRequests()
  }

  view(accessRequest, index) {
    this.adminDataService.openModal(accessRequest, 'access_request', index);
  }

}
