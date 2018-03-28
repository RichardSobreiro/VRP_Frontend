import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { DeliveryDto } from '../../DeliveryDto';
import { ProductDto } from '../../ProductDto';
import { ClientCreateEditComponent } from '../client-create-edit/client-create-edit.component';

@Component({
  selector: 'app-create-delivery',
  templateUrl: './create-delivery.component.html',
  styleUrls: ['./create-delivery.component.css']
})

export class CreateDeliveryComponent implements OnInit {

  constructor(private router: Router, private http:HttpClient) {
    this.delivery = new DeliveryDto();
    this.http.get<ProductDto[]>("http://localhost:58949/product/products").subscribe(val => { 
      this.products = val;
    });
   }

   public delivery: DeliveryDto;
   public products: Array<ProductDto>;

  ngOnInit() {
  }

  updateProduct(args){
    this.delivery.productType = args.target.value;
  }

  navigateToCreateClient(args){
    this.router.navigate(['client']);
    console.log('navigateToCreateClient');
  }


  
  createFractionedDelivery() {

  }

}
