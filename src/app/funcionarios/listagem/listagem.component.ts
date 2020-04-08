import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../shared/funcionario.service';
import { Funcionario } from '../shared/funcionario';
import { PoTableColumn } from '@portinari/portinari-ui';
import { FuncionarioDTO } from '../shared/models/funcionario-dto';

@Component({
    selector: 'cad-listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent implements OnInit {

    private funcionarios: Funcionario[] = [];
    private hasNext: boolean = false;
    private columns: Array<PoTableColumn>;
    private items: Array<FuncionarioDTO> = [];

    constructor(private service: FuncionarioService) {
    }

    ngOnInit(): void {
        this.carregarFuncionarios();
        this.columns = this.getColumns();
        setTimeout(() => {
            this.items = this.getItems();
        }, 1000);
    }

    public carregarFuncionarios() {
        this.service.listarFuncionarios()
            .subscribe(resp => {
                this.funcionarios = resp.items;
                this.hasNext = resp.hasNext;
            })
    }

    private getColumns(): Array<PoTableColumn> {
        return [
            { property: 'codigo', label: 'Código', type: 'number', width: '10%' },
            { property: 'nome', type: 'string', width: '30%' },
            { property: 'email', type: 'string', width: '30%' },
            { property: 'cargo', type: 'string', width: '30%' },
        ];
    }

    private getItems(): Array<FuncionarioDTO> {
        let funcionariosDTO: Array<FuncionarioDTO> = [];
        this.funcionarios.forEach(funcionario => {
            let func: FuncionarioDTO = new FuncionarioDTO();
            func.codigo = funcionario.id;
            func.nome = funcionario.nome;
            func.email = funcionario.email;
            func.cargo = funcionario.cargo;
            funcionariosDTO.push(func);
        });
        return funcionariosDTO;
    }


}