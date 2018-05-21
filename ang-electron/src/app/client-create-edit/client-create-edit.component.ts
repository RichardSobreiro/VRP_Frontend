import { Component, OnInit } from '@angular/core';
import { ClientDto } from '../../ClientDto';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AddressDto } from '../../AddressDto';
import { DocumentClientDto } from '../../DocumentClientDto';

@Component({
  selector: 'app-client-create-edit',
  templateUrl: './client-create-edit.component.html',
  styleUrls: ['./client-create-edit.component.css']
})
export class ClientCreateEditComponent implements OnInit {

  public client: ClientDto = new ClientDto();
  public documentsType: Array<DocumentClientDto> = new Array<DocumentClientDto>();

  constructor(private router: Router, private http:HttpClient) { 
    this.client.address = new AddressDto();
    this.documentsType = [new DocumentClientDto(1,'CPF'), new DocumentClientDto(2, 'CNPJ')];
  }

  ngOnInit() {
  }

  saveClient(){
    this.createClientServer();  
  }

  navigateToCreateDelivery(){
    this.router.navigate(['']);  
  }
  
  updateClientsDocumentType(args){
    this.client.documentType = args.target.value;  
  }

  private validateClient(){
    let clientOk = true;
    let addressOk = true;
    if(typeof this.client.name == 'undefined' || !this.client.name){
      clientOk = false;
    }
    if(typeof this.client.documentNumber == 'undefined' || !this.client.documentNumber) {
      clientOk = false;
    }
    if(typeof this.client.documentType == 'undefined' || !this.client.documentType){
      clientOk = false;
    }

    if(typeof this.client.address.street == 'undefined' || !this.client.address.street){
      addressOk = false;
    }
    if(typeof this.client.address.number == 'undefined' || !this.client.address.number){
      addressOk = false; 
    }
    if(typeof this.client.address.neighborhood == 'undefined' || !this.client.address.neighborhood){
      addressOk = false;
    }
    if(typeof this.client.address.city == 'undefined' || !this.client.address.city){
      addressOk = false;
    }
    if(typeof this.client.address.state == 'undefined' || !this.client.address.state){
      addressOk = false;
    }
    
    return clientOk && addressOk;
  }
  
  private getClientServer() {
    this.http.get<ClientDto>("http://localhost:58949/client/client").subscribe(client => { 
      this.client = client;
    });
  }

  private createClientServer() {
    if(true){
      this.http.post("http://localhost:58949/client/client", this.client).subscribe(val => {
        this.router.navigate(['createdelivery']);
      });
    }
  }
}
