import { Disciplina } from "@entities/disciplina";
import { DbConnection } from "@interfaces/dbconnection";
import { DisciplinaGatewayInterface } from "@interfaces/gateways";
import { ParametroBusca } from "@types";

export class DisciplinaGateway implements DisciplinaGatewayInterface {
  private repositorioDados: DbConnection;
  private nomeTabela = "disciplinas";

  constructor(conexao: DbConnection) {
    this.repositorioDados = conexao;
  }

  public async BuscarDisciplinaPorNome(
    nome: string
  ): Promise<Disciplina | null> {
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
    const disciplina = new Disciplina(
      linhaRetorno.disciplina_id,
      linhaRetorno.nome
    );

    return disciplina;
  }

  public async BuscarTodasDisciplinas(): Promise<Disciplina[] | null> {
    const result = await this.repositorioDados.BuscarTodasLinhas(
      this.nomeTabela,
      null
    );

    if (result === null) {
      return null;
    } else {
      const returnData: Disciplina[] = [];
      result.forEach((element: any) => {
        returnData.push(new Disciplina(element.disciplina_id, element.nome));
      });
      return returnData;
    }
  }

  public async IncluirDisciplina(disciplina: Disciplina): Promise<void> {
    const novoId = await this.repositorioDados.ObterUltimoId(this.nomeTabela);

    const parametros: ParametroBusca[] = [];
    parametros.push({ campo: "disciplina_id", valor: novoId });
    parametros.push({ campo: "nome", valor: disciplina.nome });

    const sucesso = await this.repositorioDados.InserirLinha(
      this.nomeTabela,
      parametros
    );
  }
}
