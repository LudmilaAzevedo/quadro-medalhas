export class Extintor {
    private formato: string;
    private cor: string;
    private tamanho: number;
 
    constructor(_formato: string, _cor: string, _tamanho: number) {
        this.formato = _formato;
        this.cor = _cor;
        this.tamanho = _tamanho;
    }
 
    public getFormato(): string {
       return this.formato
    }
 
    public getCor(cor: string): void {
        this.cor = cor;
    }

    public getTamanho(tamanho: number): void {
        this.tamanho = tamanho;

    }

    public soltaEspuma(extintor: string): void {
        console.log(`O ${extintor} solta espuma para apagar o fogo.`);
    }

    public apagaFogo(): void {
        console.log(`O extintor apaga o fogo.`);
    }
 }