import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http/src/client';

import { DeliveryDto } from '../../DeliveryDto';
import { DeliveriesFilterDto } from '../../DeliveriesFilterDto';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.css']
})

export class DeliveryListComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { 
    this.deliveriesFilter.desiredDate = new Date();
    this.getDeliveriesByFilter();
  }

  ngOnInit() {}

  public getDeliveriesByFilter(){
    this.http.get<DeliveryDto[]>("http://localhost:58949/deliveriesbyfilter", {
      params: {
        desiredDate: this.deliveriesFilter.desiredDate.toString(),
        clientName: this.deliveriesFilter.clientName,
        productType: this.deliveriesFilter.productType.productType.toString(),
        statusDelivery: this.deliveriesFilter.statusDelivery
      }
    }).subscribe(deliveries => {
      this.deliveries = deliveries;
    });  
  } 

  public deliveriesFilter: DeliveriesFilterDto = new DeliveriesFilterDto();
  public deliveries: Array<DeliveryDto>;
}
