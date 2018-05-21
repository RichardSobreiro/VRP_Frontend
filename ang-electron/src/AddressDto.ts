export class AddressDto {
    addressId: number;
    street: string = "";
    number: number;
    neighborhood: string = "";
    city: string = "";
    state: string = "";
    productProviderId: string = "";
    clientId: string = "";
    depotId: number;
    formattedAddress: string;
    latitude: number;
    longitude: number;
};