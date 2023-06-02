import { DisciplinaController } from "@/controllers/disciplina";
import { EstudanteController } from "@/controllers/estudante";
import { MatriculaController } from "@/controllers/matricula";
import { Disciplina, Estudante, Matricula } from "@/entities";
import { DbConnection } from "@/interfaces/dbconnection";

export class FaculdadeApp {
    
    private _dbconnection: DbConnection;

    constructor(dbconnection: DbConnection) {
        this._dbconnection = dbconnection;
    }
    
    start() {
        const express = require('express');
        const app = express();
        const port = 3000;
        
        app.get('/estudantes', (req, res) => {
          const estudantes = EstudanteController.ObterTodosEstudantes();
          res.send(JSON.stringify(estudantes));
        });
        
        app.get('/disciplinas', (req, res) => {
            const disciplinas = DisciplinaController.ObterTodasDisciplinas();
            res.send(JSON.stringify(disciplinas));
        })
        
        app.get('/matriculas/estudante/:estudante', (req, res) => {
            const estudante = req.params.estudante;
            const disciplinasEstudante = MatriculaController.ObterDisciplinasEstudante(new Estudante(estudante));
            res.send(JSON.stringify(estudante));
        })
        
        app.get('/matriculas/disciplina/:disciplina', (req, res) => {
            const disciplina = req.params.disciplina;
            const estudantesDisciplina = MatriculaController.ObterEstudantesDisciplina(new Disciplina(disciplina));
            res.send(JSON.stringify(disciplina));
        })
        
        app.listen(port, () => {
          console.log(`Faculdade app listening on port ${port}`)
        })
    }
    
    
}
