import { AddressDto } from "C:/Users/Richard/Desktop/VRP_FrontEnd/ang-electron/src/AddressDto"
import { DeliveryTruckTripDto } from "C:/Users/Richard/Desktop/VRP_FrontEnd/ang-electron/src/DeliveryTruckTripDto"

export class DeliveryDto {
    deliveryId: number;
	dateDelivery: Date;
	clientId: number;
	productType: number;
	quantityProduct: number;
	deliveriesTruckTips: Array<DeliveryTruckTripDto>;
	address: AddressDto;
}