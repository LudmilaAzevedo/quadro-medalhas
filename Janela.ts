export class Janela {
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

    public separaAmbiente(janela: string): void {
        console.log(`A ${janela} separou o ambiente do quarto e do jardim.`);
    }

    public iluminar(): void {
        console.log(`A janela foi aberta iluminando todo o ambiente.`);
    }
 }