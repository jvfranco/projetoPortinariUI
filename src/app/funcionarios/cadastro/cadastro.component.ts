import { Component, OnInit } from '@angular/core';
import { PoDynamicFormField, PoNotificationService } from '@portinari/portinari-ui';
import { FuncionarioService } from '../shared/funcionario.service';
import { Funcionario } from '../shared/funcionario';
import { Router } from '@angular/router';

@Component({
    selector: 'cad-cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

    funcionario = {};
    cargos: string[] = [];
    options: Array<any> = [];
    fields: Array<PoDynamicFormField> = [];

    constructor(
        private service: FuncionarioService,
        private poNotification: PoNotificationService,
        private route: Router
    ) { }

    ngOnInit(): void {
        this.obterCargos();
    }

    obterCargos() {
        this.service.listarCargos()
            .subscribe(resp => {
                this.obterOptions(resp);
            },
                err => console.log('erro'),
                () => {
                    this.criarForm();
                });
    }

    obterOptions(cargos: Array<any>) {
        cargos.forEach(cargo => {
            let op = {
                label: cargo,
                value: cargo
            }
            this.options.push(op);
        });
    }

    criarForm() {
        this.fields = [
            { property: 'nome', label: 'Nome', required: true, minLength: 3, maxLength: 70, gridColumns: 6, gridSmColumns: 12 },
            { property: 'cpf', label: 'CPF', required: true, mask: '999.999.999-99', gridColumns: 6, gridSmColumns: 12 },
            { property: 'email', label: 'E-mail', required: true, maxLength: 70, gridColumns: 6, gridSmColumns: 12 },
            { property: 'telefone', label: 'Telefone', mask: '(99) 99999-9999', required: true, maxLength: 20, gridColumns: 6, gridSmColumns: 12 },
            { property: 'cargo', label: 'Cargo', required: true, gridColumns: 6, gridSmColumns: 12, options: this.options, optionsMulti: false },
            { property: 'salario', label: 'Salário', required: true, maxLength: 15, gridColumns: 6, gridSmColumns: 12 }
        ];
    }

    cadastrarNovoUsuario(funcionario) {
        this.service.cadastrarFuncionario(funcionario)
            .subscribe(() => this.route.navigateByUrl('/listar'),
                err => console.log('Erro'),
                () => this.poNotification.success('Funcionário cadastrado com sucesso!'));
    }


}