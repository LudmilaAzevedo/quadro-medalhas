export class lataLixo {
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

    public descartaLixo(lixo: string): void {
        console.log(`A comida estragada foi descartada no ${lixo} .`);
    }

    public armazenaLixo(): void {
        console.log(`O lixo caiu pois tinha muitos residuos descartados.`);
    }
 }