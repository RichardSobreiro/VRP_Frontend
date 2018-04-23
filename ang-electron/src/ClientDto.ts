import { AddressDto } from "./AddressDto";

export class ClientDto {
    clientId: number;
    dateCreation: Date;
    name: string = "";
    documentNumber: number;
    documentType: string = "";
    address: AddressDto;
};