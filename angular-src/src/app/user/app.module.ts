import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { ReactiveFormsModule } from '@angular/forms';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DamnComponent } from './components/damn/damn.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { IndicatorComponent } from './components/indicator/indicator.component';

import { AuthService } from './services/auth.service';
import { UserDataService } from './services/user-data.service';
import { NetworkStatusService } from './services/network-status.service';

import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DamnComponent,
    SnackbarComponent,
    IndicatorComponent,
  ],
  imports: [
    routing,
    BrowserModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    CookieService,
    AuthService,
    AuthGuard,
    UserDataService,
    NetworkStatusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
