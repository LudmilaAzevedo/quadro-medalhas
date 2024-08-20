export class Moto {
    private tanque: number;
    private cor: string;
    private tamanho: number;
 
    constructor(_tanque: number, _cor: string, _tamanho: number) {
        this.tanque = _tanque;
        this.cor = _cor;
        this.tamanho = _tamanho;
    }
 
    public getTanque(): number {
       return this.tanque
    }
 
    public getCor(cor: string): void {
        this.cor = cor;
    }

    public getTamanho(tamanho: number): void {
        this.tamanho = tamanho;

    }

    public locomocao(moto: string): void {
        console.log(`A ${moto} é utilizada para locomoção.`);
    }

    public empinar (): void {
        console.log(`A moto pode ser utilizada também.`);
    }
 }