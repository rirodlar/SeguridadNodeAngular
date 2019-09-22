export class Producto {
    constructor(public id?:number, public concepto?: string, public importe?: number, public categoria?: string){

    }

    public toString(): string{
        return this.id+" "+this.concepto+" "+this.importe;
    }
}
