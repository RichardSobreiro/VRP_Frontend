import { Component, OnInit } from '@angular/core';
import { VehicleRouteDto } from '../../VehicleRouteDto';
import { VehicleRouteFilterDto } from '../../VehicleRouteFilterDto';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DeliveryDto } from '../../DeliveryDto';
import { ProductDto } from '../../ProductDto';
import { MatDialog } from '@angular/material';
import { RouteMapModalComponent } from '../route-map-modal/route-map-modal.component';

@Component({
  selector: 'app-routes-trips-list',
  templateUrl: './routes-trips-list.component.html',
  styleUrls: ['./routes-trips-list.component.css']
})
export class RoutesTripsListComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, public dialog: MatDialog) { 
    this.getProducts();
    this.getVehicleRoutesByFilter();
  }

  ngOnInit() {}

  openVehicleRouteMap(vehicleRoute): void {
    let dialogRef = this.dialog.open(RouteMapModalComponent, { width: '1000px', data: vehicleRoute });
  }

  updateProduct(args) { this.vehicleRouteFilter.productType = args.target.value; }

  navigateToDeliveries(args) { this.router.navigate(['deliveries']); }

  public getVehicleRoutesByFilter() {
    this.http.get<VehicleRouteDto[]>("http://localhost:58949/vehicleroute/vehicleroutes", {
      params: {
        desiredDateInitial: this.vehicleRouteFilter.desiredDateInitial != null ? 
        this.vehicleRouteFilter.desiredDateInitial.toString() + " 00:00:00" : new Date().toString(),
        desiredDateFinal: this.vehicleRouteFilter.desiredDateFinal != null ? 
        this.vehicleRouteFilter.desiredDateFinal.toString() + " 00:00:00" : new Date().toString(),
        productType: this.vehicleRouteFilter.productType ? this.vehicleRouteFilter.productType.toString() : null
      }
    }).subscribe( vehicleRoutes => {
      this.vehicleRoutes = vehicleRoutes;
    });  
  }

  getProducts() {
    this.http.get<ProductDto[]>("http://localhost:58949/product/products").subscribe( val => { 
      this.products = val;
    });
  }

  getStringDate(d:Date){
    return d.getDay() + "/" + d.getMonth() + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  }

  public vehicleRoutes: Array<VehicleRouteDto>;
  public vehicleRouteFilter: VehicleRouteFilterDto = new VehicleRouteFilterDto();
  public products: Array<ProductDto>;
}
