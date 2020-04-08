import { Component, OnInit } from '@angular/core';
import { PoPieChartSeries } from '@portinari/portinari-ui';
import { FuncionarioService } from '../funcionarios/shared/funcionario.service';

@Component({
    selector: 'cad-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    private cargos: string[] = [];
    private funcionarios: Array<PoPieChartSeries> = [];

    constructor(private service: FuncionarioService) { }

    ngOnInit(): void {
        this.obterDados();
        this.listarCargos();
    }

    private listarCargos() {
        this.service.listarCargos()
            .subscribe(resp => {
                this.cargos = resp;
            });
    }

    private obterDados() {
        this.service.dadosGrafico()
            .subscribe(resp => {
                this.funcionarios = resp;
            });
    }



}