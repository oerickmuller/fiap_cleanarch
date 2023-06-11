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
    const bodyParser = require("body-parser");

    const app = express();
    app.use(bodyParser.json());
    const port = 3000;

    app.get("/estudante", async (req: Request, res: Response) => {
      res.setHeader("Content-type", "application/json");
      const estudantes = await EstudanteController.ObterTodosEstudantes(
        this._dbconnection
      );
      res.send(estudantes);
    });

    app.post("/estudante", async (req: Request, res: Response) => {
      const nomeEstudante: string = req.body.nome;

      await EstudanteController.IncluirEstudante(
        nomeEstudante,
        this._dbconnection
      )
        .then((r) => {
          res
            .status(201)
            .send({ success: true, message: "Registrado com sucesso!" });
        })
        .catch((err) => {
          res.status(400).send({ success: false, message: err });
        });
    });

    app.get("/disciplina", async (req: Request, res: Response) => {
      res.setHeader("Content-type", "application/json");
      const disciplinas = await DisciplinaController.ObterTodasDisciplinas(
        this._dbconnection
      );
      res.send(disciplinas);
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
