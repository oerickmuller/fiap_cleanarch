import { ParametroBusca } from "@types";

export interface DbConnection {
  BuscarLinhasPorParametros(
    nomeTabela: string,
    campos: string[] | null,
    parametros: ParametroBusca[]
  ): Promise<any>;

  BuscarTodasLinhas(
    nomeTabela: string, 
    campos?: string[] | null
  ): Promise<any[]>;

  InserirLinha(
    nomeTabela: string, 
    parametros: ParametroBusca[]
  ): Promise<boolean>;

  ObterUltimoId(nomeTabela: string): Promise<number>;
}
