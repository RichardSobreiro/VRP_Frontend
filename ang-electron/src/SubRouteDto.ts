import { AddressDto } from "./AddressDto";
import { Time } from "@angular/common";

export class SubRouteDto{
    subRouteId: number;
	vehicleRouteId: number;
	addressOrigin: AddressDto;
	addressDestiny: AddressDto;
	distance: number;
	duration: Time;
	sequenceNumber: number;
}