/* eslint-disable no-useless-constructor */
import { IUnidadeRepositoryAdapter } from '../interfaces/adapters/IUnidadeRepositoryAdapter.interface'
import { IUnidadeFactory } from '../interfaces/factories/IUnidadeFactory.interface'
import { IUnidade } from '../interfaces/IUnidade.interface'
import { Unidade } from '../model/Unidade'

export class UnidadeFactory implements IUnidadeFactory {
  constructor (
        private unidadeRepository: IUnidadeRepositoryAdapter) {
  }

  async createUnidade (unidade: IUnidade): Promise<IUnidade> {
    const unidadeBase = await this.unidadeRepository.createUnidade(unidade)
    const unidadeI = this.instanciateUnidade(unidadeBase)
    return new Promise<Unidade>(resolve => resolve(unidadeI))
  }

  async getUnidadeByUnidadeId (unidadeId: number): Promise<Unidade> {
    const unidadeBase = await this.unidadeRepository.getUnidadeByunidadeId(unidadeId)
    const unidade = this.instanciateUnidade(unidadeBase)
    return new Promise<Unidade>(resolve => resolve(unidade))
  }

  private instanciateUnidade (unidadeBase: IUnidade): Unidade {
    return new Unidade(unidadeBase.unidadeId,
      unidadeBase.nome,
      unidadeBase.parentId,
      unidadeBase.tipo,
      unidadeBase.grupo)
  }
}
