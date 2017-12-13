export interface Access {
  name: string;
  email: string;
  ssh_key: string,
  ip: string;
  access_id: number;
}

export interface Admin {
  name: string;
  email: string;
  admin_id: number;
}

export interface AccessRequest {
  name: string;
  email: string;
  message: string;
  ssh_key: string;
  access_request_id: number;
}

export interface AdminRequest {
  name: string;
  email: string;
  admin_request_id: number;
}

export interface ModalData {
  index: number;
  name: string;
  ssh_key: string;
  message: string;
  email: string;
  ip: string;
  id: number;
  modalfor: string;
}