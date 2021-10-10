import { IUnidade } from '../IUnidade.interface'

export interface IUnidadeFactory {
    createUnidade(unidade: IUnidade):Promise<IUnidade>
    getUnidadeByUnidadeId(unidadeId: number): Promise<IUnidade>
}
