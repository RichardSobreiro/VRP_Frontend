import { Time } from "@angular/common/src/i18n/locale_data_api";

export class DeliveryTruckTripDto {
    deliveryTruckTripId: number;
	deliveryId: number;
	productType: number;
	quantityProduct: number;
	timeTrip: Time;
	timeArrivalClient: Time;
}