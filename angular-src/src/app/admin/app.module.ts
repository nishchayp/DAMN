import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AccessesComponent } from './components/accesses/accesses.component';
import { AccessRequestsComponent } from './components/access-requests/access-requests.component';
import { AdminsComponent } from './components/admins/admins.component';
import { AdminRequestsComponent } from './components/admin-requests/admin-requests.component';
import { ModalComponent } from './components/modal/modal.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { HeadingComponent } from './components/heading/heading.component';

import { AdminDataService } from './services/admin-data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccessesComponent,
    AccessRequestsComponent,
    AdminsComponent,
    AdminRequestsComponent,
    ModalComponent,
    SnackbarComponent,
    HeadingComponent
  ],
  imports: [
  	routing,
    ReactiveFormsModule,
    BrowserModule,
    HttpModule,
    ClipboardModule
  ],
  providers: [AdminDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
