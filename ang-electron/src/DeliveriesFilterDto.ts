import { ProductDto } from "./ProductDto";

export class DeliveriesFilterDto {
    public desiredDateInitial: Date;
    public desiredDateFinal: Date;
    public clientName: string;
    public productType: number;
    public valueStatus: string;
    public quantityProductInitial: number;
    public quantityProductFinal: number;

    initialize(){
        this.desiredDateInitial = new Date();
        this.desiredDateFinal = new Date();
        this.clientName = "";            
        this.valueStatus = "";
        this.quantityProductInitial = 0;
        this.quantityProductFinal = 0;
    }
}