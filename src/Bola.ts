export class Bola {
    private tamanho: number;
    private formato: string;
    private marca: string;
 
    constructor(_tamanho: number, _formato: string, _marca: string) {
        this.tamanho = _tamanho;
        this.formato = _formato;
        this.marca = _marca;
    }
 
    public getTamanho(): number {
       return this.tamanho
    }
 
    public getFormato(formato: string): void {
        this.formato = formato;
    }

    public getMarca(marca: string): void {
        this.marca = marca;

    }

    public jogarFutebol(pessoa: string): void {
        console.log(`${pessoa} vai jogar futebol`);
    }

    public praticarOutrosEsportes(): void {
        console.log(`A menina vai praticar outros esportes utilizando a bola.`);
    }
 }