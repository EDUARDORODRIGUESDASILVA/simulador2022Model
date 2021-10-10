import { IUnidade } from '../IUnidade.interface'

export interface IUnidadeRepositoryAdapter {

    createUnidade(unidade: IUnidade): Promise<IUnidade>
    getUnidadeByunidadeId(unidadeId: number): Promise<IUnidade>
}
