import { Funcionario } from './funcionario';

export interface Resposta {
    hasNext: boolean;
    items: Funcionario[];
}