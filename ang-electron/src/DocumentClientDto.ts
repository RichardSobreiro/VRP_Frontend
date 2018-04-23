export class DocumentClientDto{
    constructor(documentTypeId:number, documentTypeDescription:string) {
        this.documentTypeId = documentTypeId;
        this.documentTypeDescription = documentTypeDescription;   
    }
    
    documentTypeId: number;
    documentTypeDescription: string = "";
}