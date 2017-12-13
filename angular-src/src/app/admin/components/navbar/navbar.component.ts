import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navOpen: boolean;

  constructor() { }

  ngOnInit() {
    this.navOpen = false;
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
  }

  closeNav() {
  	this.navOpen = false;
  }

  openNav() {
  	this.navOpen = true;
  }

}