import { Component, OnInit } from '@angular/core';
import { AdminDataService } from '../../services/admin-data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'admin-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

  heading: string;
  subscription: Subscription;

  constructor(
    private adminDataService: AdminDataService
  ) { }

  ngOnInit() {
  	this.heading = this.adminDataService.heading;
    this.subscription = this.adminDataService.getHeadingData().subscribe(() => {
      this.heading = this.adminDataService.heading;
    });
  }

}
