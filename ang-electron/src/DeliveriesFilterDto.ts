import { ProductDto } from "./ProductDto";

export class DeliveriesFilterDto{
    public desiredDate: Date;
    public clientName: string;
    public productType: ProductDto;
    public statusDelivery: string;
}