import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';
import { PoMenuPanelModule, PoMenuModule } from '@portinari/portinari-ui';

@NgModule({
    declarations: [
        MenuComponent
    ],
    imports: [
        CommonModule,
        PoMenuPanelModule,
        PoMenuModule
    ],
    exports: [
        MenuComponent
    ]
})
export class CoreModule { }