export class Cadeira {
    private tamanho: number;
    private cor: string;
    private modelo: string;
 
    constructor(_tamanho: number, _cor: string, _modelo: string) {
        this.tamanho = _tamanho;
        this.cor = _cor;
        this.modelo = _modelo;
    }
 
    public getTamanho(): number {
       return this.tamanho
    }
 
    public getCor(cor: string): void {
        this.cor = cor;
    }

    public getModelo(modelo: string): void {
        this.modelo = modelo;

    }

    public sentar(cadeira: string): void {
        console.log(`A ${cadeira}} é usada para sentar.`);
    }

    public subir(): void {
        console.log(`A cadeira pode ser utilizada também para se para subir em cima dela.`);
    }
 }