import { Component, OnInit } from '@angular/core';
import { AdminDataService } from '../../services/admin-data.service';
import { ModalData } from '../../app.interfaces';
import { Subscription } from 'rxjs/Subscription';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'admin-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  modalActive: boolean;
  modalData: ModalData;
  subscription: Subscription;
  ipForm: FormGroup;
  ipValid: boolean;
  ip: string;

  constructor(
    private adminDataService: AdminDataService
  ) { }

  ngOnInit() {
  	this.modalData = this.adminDataService.modalData;
    this.subscription = this.adminDataService.getModalData().subscribe(() => {
      this.modalData = this.adminDataService.modalData;
      this.modalActive = true;
    });
    this.ipForm = new FormGroup({
      ip: new FormControl()
    });
    this.modalActive = false;
    this.ip = '';
  }

  closeModal() {
    this.modalActive = false;
    this.ip = '';
  }

  revoke(id, index) {
    this.adminDataService.revokeAccessPrivilege(id, index);
    this.closeModal();
  }

  reject(id, index) {
    this.adminDataService.rejectAccessRequest(id, index);
    this.closeModal();
  }

  accept(ip, id, index) {
    if(this.ipValid) {
      this.adminDataService.acceptAccessRequest(ip, id, index);
      this.closeModal();
    } else
      this.adminDataService.sendAlertDanger('Enter a valid IP or domain');
  }

  ipInputChanged(value) {
    if(this.validateIPAddress(value) || this.validateDomain(value))
      this.ipValid = true;
    else
      this.ipValid = false;
  }

  validateIPAddress(ipaddress) {
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
      return true;
    }
    return false;
  }

  validateDomain(domain) {
    if (/^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(domain)) {
      return true;
    }
    return false;
  }

}
