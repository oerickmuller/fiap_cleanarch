import { DisciplinaController } from "@controllers/disciplina";
import { EstudanteController } from "@controllers/estudante";
import { MatriculaController } from "@controllers/matricula";
import { Disciplina } from "@entities/disciplina";
import { Estudante } from "@entities/estudante";
import { Matricula } from "@entities/matricula";
import { DbConnection } from "@interfaces/dbconnection";

import { Request, Response } from "express";

export class FaculdadeApp {
  private _dbconnection: DbConnection;

  constructor(dbconnection: DbConnection) {
    this._dbconnection = dbconnection;
  }

  start() {
    const express = require("express");
    const app = express();
    const port = 3000;

    // app.get('/estudante', (req, res) => {
    //   /**
    //    * Lista todos os dados de estudantes registrados
    //    */
    // //   const estudantes = EstudanteController.ObterTodosEstudantes();
    // //   res.send(JSON.stringify(estudantes));
    // });

    // app.post('/estudante', (req, res) => {
    //     /**
    //      * Fornecendo um nome, criar um objeto estudante com este nome
    //      * se ainda não existir um com esse nome;
    //      */
    // })

    app.get("/disciplina", (req: Request, res: Response) => {
      const disciplinas = DisciplinaController.ObterTodasDisciplinas(
        this._dbconnection
      );
      res.send(JSON.stringify(disciplinas));
    });

    // app.post('/disciplina', (req, res) => {
    //     /**
    //      * Fornecendo um nome de disciplina, criar o disciplina
    //      * se ainda não existir um com esse nome;
    //      */
    // })

    // app.get('/estudante/:nome/disciplinas', (req, res) => {
    //     /**
    //      * passando um nome de estudante, listar as disciplinas
    //      * em que está matriculado.
    //      */
    //     // const estudante = req.params.nome;
    //     // const disciplinasEstudante = MatriculaController.ObterDisciplinasEstudante(new Estudante(estudante));
    //     // res.send(JSON.stringify(estudante));
    // })

    // app.get('/disciplina/:nome/estudantes', (req, res) => {
    //     /**
    //      * Dado o nome de uma disciplina, listar os estudantes.
    //      */
    //     // const disciplina = req.params.disciplina;
    //     // const estudantesDisciplina = MatriculaController.ObterEstudantesDisciplina(new Disciplina(disciplina));
    //     // res.send(JSON.stringify(disciplina));
    // })

    app.listen(port, () => {
      console.log(`Faculdade app listening on port ${port}`);
    });
  }
}
