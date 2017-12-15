import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  message: string;
  type: boolean;
  subscription: Subscription;
  show: boolean;

  constructor(
    private userDataService: UserDataService
  ) { }

  ngOnInit() {
    this.subscription = this.userDataService.getSnackbarData().subscribe(() => {
      this.message = this.userDataService.snackbarMessage;
      this.type = this.userDataService.snackbarType;
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
