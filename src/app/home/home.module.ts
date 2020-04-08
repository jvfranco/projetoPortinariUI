import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoMenuPanelModule, PoChartModule } from '@portinari/portinari-ui';
import { HomeComponent } from './home.component';
import { FuncionariosModule } from '../funcionarios/funcionarios.module';
import { CoreModule } from '../core/core.module';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        PoMenuPanelModule,
        PoChartModule,
        CoreModule,
        FuncionariosModule
    ],
    exports: [

    ]
})
export class HomeModule { }