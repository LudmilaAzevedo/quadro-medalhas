export class Sapo {
    private especie: string;
    private cor: string;
    private tamanho: number;
 
    constructor(_especie: string, _cor: string, _tamanho: number) {
        this.especie = _especie;
        this.cor = _cor;
        this.tamanho = _tamanho;
    }
 
    public getEspecie(): string {
       return this.especie
    }
 
    public getCor(cor: string): void {
        this.cor = cor;
    }

    public getTamanho(tamanho: number): void {
        this.tamanho = tamanho;

    }

    public coaxa(sapo: string): void {
        console.log(`O ${sapo} coaxa`);
    }

    public pula(): void {
        console.log(`O sapo pula`);
    }
 }