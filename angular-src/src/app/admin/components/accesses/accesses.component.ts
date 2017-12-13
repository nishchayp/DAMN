import { Component, OnInit } from '@angular/core';
import { AdminDataService } from '../../services/admin-data.service';
import { Access } from '../../app.interfaces';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'admin-accesses',
  templateUrl: './accesses.component.html',
  styleUrls: ['./accesses.component.css', '../../app.component.css']
})
export class AccessesComponent implements OnInit {

  accesses: Access[];
  subscription: Subscription;

  constructor(
    private adminDataService: AdminDataService
  ) { }

  ngOnInit() {
    this.accesses = this.adminDataService.accesses;
    this.adminDataService.changeHeading('Accesses');
    this.subscription = this.adminDataService.getInfo().subscribe(() => {
      this.accesses = this.adminDataService.accesses;
    });
    this.adminDataService.getAccesses()
  }
  
  view(access, index) {
    this.adminDataService.openModal(access, 'access', index);
  }

}
