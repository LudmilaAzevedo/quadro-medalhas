export class Extintor {
    private base: string;
    private cor: string;
    private tamanho: number;
 
    constructor(_base: string, _cor: string, _tamanho: number) {
        this.base = _base;
        this.cor = _cor;
        this.tamanho = _tamanho;
    }
 
    public getBase(): string {
       return this.base
    }
 
    public getCor(cor: string): void {
        this.cor = cor;
    }

    public getTamanho(tamanho: number): void {
        this.tamanho = tamanho;

    }

    public sinalizar(cone: string): void {
        console.log(`O ${cone} pode ser utilizado para sinalizar.`);
    }

    public atividadeFisica(): void {
        console.log(`O cone é utilizado também para atividades físicas.`);
    }
 }