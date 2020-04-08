import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resposta } from './resposta';
import { Funcionario } from './funcionario';
import { PoPieChartSeries } from '@portinari/portinari-ui';

const API_URL: string = 'http://localhost:8080/api/f1';

@Injectable({ providedIn: 'root' })
export class FuncionarioService {

    constructor(private http: HttpClient) { }

    public listarFuncionarios() {
        return this.http.get<Resposta>(API_URL);
    }

    public cadastrarFuncionario(funcionario: Funcionario) {
        return this.http.post(API_URL, funcionario);
    }

    public dadosGrafico() {
        return this.http.get<Array<PoPieChartSeries>>(API_URL + '/dados');
    }

    public listarCargos() {
        return this.http.get<string[]>(API_URL + '/cargos');
    }
}