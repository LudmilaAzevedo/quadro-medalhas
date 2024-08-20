export class Esmalte {
    private cor: string;
    private formato: string;
    private marca: string;
 
    constructor(_cor: string, _formato: string, _marca: string) {
        this.cor = _cor;
        this.formato = _formato;
        this.marca = _marca;
    }
 
    public getCor(): string {
       return this.cor
    }
 
    public getFormato(formato: string): void {
        this.formato = formato;
    }

    public getMarca(marca: string): void {
        this.marca = marca;

    }

    public pintarUnha(pessoa: string): void {
        console.log(`${pessoa} vai pintar a unha`);
    }

    public protegeUnha(): void {
        console.log(`O esmalte protege a unha`);
    }
 }