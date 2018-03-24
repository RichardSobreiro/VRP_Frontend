import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/Observable"; 

import { AddressDto } from "C:/Users/Richard/Desktop/VRP_FrontEnd/ang-electron/src/AddressDto"
import { ClientDto } from "C:/Users/Richard/Desktop/VRP_FrontEnd/ang-electron/src/ClientDto";
import { ProductDto } from "C:/Users/Richard/Desktop/VRP_FrontEnd/ang-electron/src/ProductDto";
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { DeliveryDto } from '../DeliveryDto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  
  constructor(private _electronService: ElectronService, private http:HttpClient) { 
    this.delivery = new DeliveryDto();
    this.http.get<ProductDto[]>("http://localhost:58949/product/products").subscribe(val => { 
      this.products = val;
    });

  }   // DI

  public delivery: DeliveryDto;
  public products: Array<ProductDto>;
  public title = 'VRP';

  updateProduct(args){
    this.delivery.productType = args.target.value;
    console.log("Product value: " + args.target.value);
  }
  
  createFractionedDelivery() {
    
  }
}
