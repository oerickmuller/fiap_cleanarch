import { Estudante } from "@entities";
import { DbConnection } from "@interfaces/dbconnection";
import { EstudanteGatewayInterface } from "@interfaces/gateways";
import { Erro, ParametroBusca } from "@types";

export class EstudanteGateway implements EstudanteGatewayInterface {
  private repositorioDados: DbConnection;
  private nomeTabela = "estudantes";

  constructor(database: DbConnection) {
    this.repositorioDados = database;
  }

  async BuscarEstudantePorNome(nome: string): Promise<Estudante | null> {
    const retornoBD = await this.repositorioDados.BuscarLinhasPorParametros(
      this.nomeTabela,
      null,
      [{ campo: "nome", valor: nome }]
    );

    if (retornoBD === null || retornoBD === undefined) {
      return null;
    }

    if (retornoBD.length < 1) {
      return null;
    }

    const linhaRetorno = retornoBD[0];
    const estudante = new Estudante(
      linhaRetorno.estudante_id,
      linhaRetorno.nome
    );

    return estudante;
  }

  async BuscarTodosEstudantes(): Promise<Estudante[] | null> {
    const result = await this.repositorioDados.BuscarTodasLinhas(
      this.nomeTabela,
      null
    );

    if (result === null) {
      return null;
    } else {
      const returnData: Estudante[] = [];
      result.forEach((element: any) => {
        returnData.push(new Estudante(element.estudante_id, element.nome));
      });
      return returnData;
    }
  }

  async IncluirEstudante(estudante: Estudante): Promise<boolean> {
    const novoId = await this.repositorioDados.ObterUltimoId(this.nomeTabela);

    const parametros: ParametroBusca[] = [];
    parametros.push({ campo: "estudante_id", valor: novoId });
    parametros.push({ campo: "nome", valor: estudante.nome });

    const sucesso = await this.repositorioDados.InserirLinha(
      this.nomeTabela,
      parametros
    );
    return sucesso;
  }
}
