export class Porta {
    private modelo: string;
    private cor: string;
    private tamanho: number;
 
    constructor(_modelo: string, _cor: string, _tamanho: number) {
        this.modelo = _modelo;
        this.cor = _cor;
        this.tamanho = _tamanho;
    }
 
    public getModelo(): string {
       return this.modelo
    }
 
    public getCor(cor: string): void {
        this.cor = cor;
    }

    public getTamanho(tamanho: number): void {
        this.tamanho = tamanho;

    }

    public separa(porta: string): void {
        console.log(`A ${porta} separa ambientes.`);
    }

    public abreEfecha(): void {
        console.log(`A porta abre e fecha.`);
    }
 }