import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListagemComponent } from './listagem/listagem.component';
import { PoTableModule, PoDynamicModule, PoButtonModule } from '@portinari/portinari-ui';
import { CoreModule } from '../core/core.module';
import { CadastroComponent } from './cadastro/cadastro.component';


@NgModule({
    declarations: [
        ListagemComponent,
        CadastroComponent
    ],
    imports: [
        CommonModule,
        PoTableModule,
        CoreModule,
        PoDynamicModule,
        PoButtonModule,
        HttpClientModule
    ],
    exports: [
        ListagemComponent,
        CadastroComponent
    ]
})
export class FuncionariosModule { }