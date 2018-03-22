import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { HttpClient } from '@angular/common/http';

import { AddressDto } from "C:/Users/Richard/Desktop/AngularTest/ang-electron/src/AddressDto";
import { ClientDto } from "C:/Users/Richard/Desktop/AngularTest/ang-electron/src/ClientDto";
import { ProductDto } from "C:/Users/Richard/Desktop/AngularTest/ang-electron/src/ProductDto";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  constructor(private _electronService: ElectronService, private http:HttpClient) { }   // DI

  public client: ClientDto; 
  public address: AddressDto;
  public dateDelivery: Date;
  public quantityOfProduct: Number; 
  public products = [
    { productId: 1, descriptionProduct: "Product 1" },
    { productId: 2, descriptionProduct: "Product 2" },
    { productId: 3, descriptionProduct: "Product 3" }]
  public title = 'VRP';


  
  launchWindow() {
    this._electronService.shell.openExternal('https://coursetro.com');
    this.products = this.http
            .get<ProductDto[]>("/courses.json")
            .map(data => _.values(data));
  }
}
