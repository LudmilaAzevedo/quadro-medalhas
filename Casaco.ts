export class Casaco {
    private modelo: string;
    private cor: string;
    private marca: string;
 
    constructor(_modelo: string, _cor: string, _marca: string) {
        this.modelo = _modelo;
        this.cor = _cor;
        this.marca = _marca;
    }
 
    public getModelo(): string {
       return this.modelo
    }
 
    public getCor(cor: string): void {
        this.cor = cor;
    }

    public getMarca(marca: string): void {
        this.marca = marca;

    }

    public protege(casaco: string): void {
        console.log(`O ${casaco} protege do frio.`);
    }

    public veste(): void {
        console.log(`A menina veste o casaco`);
    }
 }