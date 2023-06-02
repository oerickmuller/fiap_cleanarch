export class Disciplina {
    private _nome: string;

    constructor(nome: string) {
        this._nome = nome;
    }

    get nome(): string {
        return this.nome;
    }
}