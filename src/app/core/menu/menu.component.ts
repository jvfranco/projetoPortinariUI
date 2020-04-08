import { PoMenuItem } from '@portinari/portinari-ui';
import { Component } from '@angular/core';

@Component({
    selector: 'cad-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent {

    public menu: PoMenuItem[] = [
        { label: 'Home', link: '/', icon: 'po-icon-home', shortLabel: 'Home' },
        { label: 'Dashboard', link: '/', icon: 'po-icon po-icon-chart-columns', shortLabel: 'Dash' },
        { label: 'Listar', link: '/listar', icon: 'po-icon po-icon-agro-business', shortLabel: 'Func' },
        { label: 'Cadastrar', link: '/cadastrar', icon: 'po-icon po-icon-plus-circle', shortLabel: 'Cad' }
    ];

}