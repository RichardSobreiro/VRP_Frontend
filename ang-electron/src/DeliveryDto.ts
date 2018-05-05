import { AddressDto } from "C:/Users/Richard/Desktop/VRP_FrontEnd/ang-electron/src/AddressDto"
import { DeliveryTruckTripDto } from "C:/Users/Richard/Desktop/VRP_FrontEnd/ang-electron/src/DeliveryTruckTripDto"
import { StatusDto } from "./StatusDto";
import { ProductDto } from "./ProductDto";
import { ClientDto } from "./ClientDto";

export class DeliveryDto {
	selected: boolean;
    deliveryId: number;
	dateDelivery: Date;
	clientId: number;
	productType: number;
	product: ProductDto;
	quantityProduct: number;
	typeDelivery: string;
	client: ClientDto;
	statusDelivery: StatusDto;
	deliveriesTruckTips: Array<DeliveryTruckTripDto>;
	address: AddressDto;
}