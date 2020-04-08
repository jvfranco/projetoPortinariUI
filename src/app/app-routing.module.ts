import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListagemComponent } from './funcionarios/listagem/listagem.component';
import { CadastroComponent } from './funcionarios/cadastro/cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'listar',
    component: ListagemComponent
  },
  {
    path: 'cadastrar',
    component: CadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
