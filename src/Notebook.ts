export class Notebook {
    private modelo: string;
    private marca: string;
    private sistema: string;
 
    constructor(_modelo: string, _marca: string, _sistema: string) {
        this.modelo = _modelo;
        this.marca = _marca;
        this.sistema = _sistema;
    }
 
    public getModelo(): string {
       return this.modelo
    }
 
    public getFormato(marca: string): void {
        this.marca = marca;
    }

    public getSistema(sistema: string): void {
        this.sistema = sistema;

    }

    public escrever(computador: string): void {
        console.log(`O ${computador} tem função para escrever.`);
    }

    public seComunicar(): void {
        console.log(`O notebook tem função para se comunicar com outros notebooks.`);
    }
 }