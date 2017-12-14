import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DamnComponent } from './components/damn/damn.component';

import { AuthService } from './services/auth.service';

import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DamnComponent
  ],
  imports: [
    routing,
    BrowserModule,
    HttpModule
  ],
  providers: [CookieService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
