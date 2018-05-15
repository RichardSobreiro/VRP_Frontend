import { Time } from "@angular/common";
import { SubRouteDto } from "./SubRouteDto";

export class VehicleRouteDto {
    vehicleRouteId: number; 
	dateCreation: Date;

	dateScheduled: Date;
	departureTime: Time; 
	estimatedTimeReturn: Time;  

	vehicleId: number; 
	depotId: number; 
	subRoutes: Array<SubRouteDto>;
}