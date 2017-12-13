import { Component, OnInit } from '@angular/core';
import { AdminDataService } from '../../services/admin-data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'admin-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  message: string;
  type: boolean;
  subscription: Subscription;
  show: boolean;

  constructor(
    private adminDataService: AdminDataService
  ) { }

  ngOnInit() {
    this.subscription = this.adminDataService.getSnackbarData().subscribe(() => {
      this.message = this.adminDataService.snackbarMessage;
      this.type = this.adminDataService.snackbarType;
      this.show = false;
      this.showAlert();
    });
  }

  showAlert() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 3000);
  }

}
