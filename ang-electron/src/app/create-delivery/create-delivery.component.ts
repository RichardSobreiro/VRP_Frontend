import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

import { DeliveryDto } from '../../DeliveryDto';
import { ProductDto } from '../../ProductDto';
import { ClientDto } from '../../ClientDto';
import { AddressDto } from '../../AddressDto';

import { ClientCreateEditComponent } from '../client-create-edit/client-create-edit.component';
import { SearchClientModalComponent } from '../search-client-modal/search-client-modal.component';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-create-delivery',
  templateUrl: './create-delivery.component.html',
  styleUrls: ['./create-delivery.component.css']
})

export class CreateDeliveryComponent implements OnInit {

  constructor(private router: Router, private http:HttpClient, public dialog: MatDialog) {
    this.client.address = new AddressDto(); 
    this.getProducts();
  }

  ngOnInit() {}

  searchClient(): void {
    let dialogRef = this.dialog.open(SearchClientModalComponent, { width: '1000px' });

    dialogRef.afterClosed().subscribe( result => {
      console.log('ClientId: ' + result);
      if(result){
        this.client.clientId = result;  
        this.getClientById();
      }
    });
  }

  navigateToCreateClient(args) { this.router.navigate(['client']); }

  navigateToDeliveryList(args) { this.router.navigate(['']); }

  updateProduct(args) { this.delivery.productType = args.target.value; }

  getProducts() {
    this.http.get<ProductDto[]>("http://localhost:58949/product/products").subscribe(val => { 
      this.products = val;
    });
  }

  scheduleFractionedDelivery() {
    this.http.post("http://localhost:58949/scheduledfractioneddelivery", this.delivery).subscribe(val =>{
      this.router.navigate(['']);
    });  
  }
  
  createFractionedDelivery() {
    this.http.post("http://localhost:58949/fractioneddelivery", this.delivery).subscribe(val => {
      this.router.navigate(['']);
    });  
  }

  getClientById() {
    this.http.get<ClientDto>("http://localhost:58949/client/" + this.client.clientId).subscribe(client => {
      this.client = client;
      this.delivery.clientId = client.clientId;
      this.clientValid = true;
    });
  }

  public delivery: DeliveryDto = new DeliveryDto();
  public products: Array<ProductDto>;
  public client: ClientDto = new ClientDto();
  public clientValid: boolean = false;
}
