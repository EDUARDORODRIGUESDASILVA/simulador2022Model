import { IUnidade } from '../interfaces/Unidade.interface';

export class Unidade implements IUnidade {
    readonly id: number;
    readonly nome: number;
    readonly parentId: number;
    readonly tipo: string;
    readonly grupo: number;
}
