import { IUnidade } from '../Unidade.interface'

export interface IUnidadeFactory {
    getUnidadeByUnidadeId(unidadeId: number): IUnidade
}
