export class Estudante {
  private _nome: string;
  private _id: number;

  constructor(id: number,  nome: string) {
    this._id = id;
    this._nome = nome;
  }

  get nome(): string {
    return this.nome;
  }

  get id(): number {
    return this._id;
  }
}

