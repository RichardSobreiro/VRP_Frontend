import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/Observable"; 

import { AddressDto } from "C:/Users/Richard/Desktop/VRP_FrontEnd/ang-electron/src/AddressDto"
import { ClientDto } from "C:/Users/Richard/Desktop/VRP_FrontEnd/ang-electron/src/ClientDto";
import { ProductDto } from "C:/Users/Richard/Desktop/VRP_FrontEnd/ang-electron/src/ProductDto";
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { DeliveryDto } from '../DeliveryDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  
  constructor(private _electronService: ElectronService, private router: Router) { 

  }

  ngOnInit() {

  }

}

