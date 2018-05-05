import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { DeliveryDto } from '../../DeliveryDto';
import { DeliveriesFilterDto } from '../../DeliveriesFilterDto';
import { StatusDto } from '../../StatusDto';
import { ProductDto } from '../../ProductDto';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.css']
})

export class DeliveryListComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { 
    this.deliveriesFilter = new DeliveriesFilterDto();
    this.deliveriesFilter.initialize();
    this.getStatusDeliveries();
    this.getProducts();
    this.getDeliveriesByFilter();
  }

  ngOnInit() {}

  updateProduct(args) { this.deliveriesFilter.productType = args.target.value; }

  updateStatus(args) { this.deliveriesFilter.valueStatus = args.target.value; }

  navigateToCreateDelivery(args) { this.router.navigate(['createdelivery']); }

  public getDeliveriesByFilter() {
    this.http.get<DeliveryDto[]>("http://localhost:58949/delivery/deliveries", {
      params: {
        desiredDateInitial: this.deliveriesFilter.desiredDateInitial != null ? 
          new Date(this.deliveriesFilter.desiredDateInitial).toUTCString() : new Date().toUTCString(),
        desiredDateFinal: this.deliveriesFilter.desiredDateFinal != null ? 
          new Date(this.deliveriesFilter.desiredDateFinal).toUTCString() : new Date().toUTCString(),
        clientName: this.deliveriesFilter.clientName,
        productType: this.deliveriesFilter.productType ? this.deliveriesFilter.productType.toString() : null,
        valueStatus: this.deliveriesFilter.valueStatus ? this.deliveriesFilter.valueStatus.toString() : null,
        quantityProductInitial: this.deliveriesFilter.quantityProductInitial ? 
          this.deliveriesFilter.quantityProductInitial.toString() : null,
        quantityProductFinal: this.deliveriesFilter.quantityProductFinal ? 
          this.deliveriesFilter.quantityProductFinal.toString() : null
      }
    }).subscribe( deliveries => {
      this.deliveriesSelected.splice(this.deliveriesSelected.length);
      this.deliveries = deliveries;
    });  
  } 

  updateSelectedDeliveries($event, delivery) {
    if($event.target.checked) {
      delivery.selected = true;
      this.deliveriesSelected.push(delivery);
    }
    else {
      delivery.selected = false;
      const index: number = this.deliveriesSelected.indexOf(delivery);
      if (index !== -1) {
        this.deliveriesSelected.splice(index, 1);
      }
    }
  }

  thereIsDeliveriesSelected() {
    return this.deliveriesSelected.length > 0;  
  }

  scheduleDeliveries() {
    this.http.post("http://localhost:58949/scheduledfractioneddelivery", this.deliveriesSelected).
    subscribe(value => {
      console.log(value);
    });
  };

  getProducts() {
    this.http.get<ProductDto[]>("http://localhost:58949/product/products").subscribe( val => { 
      this.products = val;
    });
  }

  getStatusDeliveries() {
    this.http.get<StatusDto[]>("http://localhost:58949/delivery/statusdeliveries").subscribe(val => { 
      this.statusList = val;
    });
  }

  public deliveriesFilter: DeliveriesFilterDto = new DeliveriesFilterDto();
  public deliveries: Array<DeliveryDto>;
  public deliveriesSelected: Array<DeliveryDto> = new Array<DeliveryDto>();
  public statusList: Array<StatusDto>;
  public products: Array<ProductDto>;
}
