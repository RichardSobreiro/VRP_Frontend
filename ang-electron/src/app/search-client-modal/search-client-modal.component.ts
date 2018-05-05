import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient } from '@angular/common/http';

import { ClientDto } from '../../ClientDto';
import { AddressDto } from '../../AddressDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-client-modal',
  templateUrl: './search-client-modal.component.html',
  styleUrls: ['./search-client-modal.component.css']
})
export class SearchClientModalComponent implements OnInit {

  constructor(private router: Router, public dialogRef: MatDialogRef<SearchClientModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private http:HttpClient) { }

  ngOnInit() { }

  onNoClick(): void { this.dialogRef.close(this.data); }

  navigateToCreateClient(args) { 
    this.dialogRef.close(this.data);
    this.router.navigate(['client']); 
  }

  getClientsByName() {
    this.http.get<ClientDto[]>("http://localhost:58949/client/clientbyname/" + this.clientName).subscribe(val => {
      this.clients = val;
    });
  }

  selectClient(args, clientId) { 
    this.data = clientId; 
    console.log("Modal - ClientId: " + this.data);
  }

  public clientName: string = "";
  public clients: Array<ClientDto>;

}
