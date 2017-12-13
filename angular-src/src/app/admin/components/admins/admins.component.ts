import { Component, OnInit } from '@angular/core';
import { AdminDataService } from '../../services/admin-data.service';
import { Admin } from '../../app.interfaces';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'admin-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css', '../../app.component.css']
})
export class AdminsComponent implements OnInit {

  admins: Admin[];
  subscription: Subscription;

  constructor(
    private adminDataService: AdminDataService
  ) { }

  ngOnInit() {
  	this.admins = this.adminDataService.admins;
    this.adminDataService.changeHeading('Admins');
    this.subscription = this.adminDataService.getInfo().subscribe(() => {
      this.admins = this.adminDataService.admins;
    });
    this.adminDataService.getAdmins();
  }
  
  revoke(id, index) {
    this.adminDataService.revokeAdminPrivilege(id, index);
  }

}
