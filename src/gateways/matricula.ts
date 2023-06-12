import { Estudante, Matricula, Disciplina } from "@entities";
import { DbConnection } from "@interfaces/dbconnection";
import { MatriculaGatewayInterface } from "@interfaces/gateways";
import { ParametroBd } from "@types";

export class MatriculaGateway implements MatriculaGatewayInterface {
  private connection: DbConnection;
  private nomeTabela = "matriculas";

  constructor(database: DbConnection) {
    this.connection = database;
  }
  public async Buscar(
    estudante: Estudante,
    disciplina: Disciplina
  ): Promise<Matricula | null> {
    const resultado = await this.connection.BuscarPorParametros(
      this.nomeTabela,
      null,
      [
        { campo: "disciplina_id", valor: disciplina.id },
        { campo: "estudante_id", valor: estudante.id },
      ]
    );

    if (resultado === null || resultado === undefined) return null;
    if (resultado.length < 1) return null;

    return new Matricula(estudante, disciplina);
  }

  public async IncluirMatricula(matricula: Matricula): Promise<void> {
    const parametros: ParametroBd[] = [];
    parametros.push({ campo: "disciplina_id", valor: matricula.disciplina.id });
    parametros.push({ campo: "estudante_id", valor: matricula.estudante.id });

    await this.connection.Inserir(this.nomeTabela, parametros);
  }
}
