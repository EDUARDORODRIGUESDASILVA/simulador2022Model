import { Sequelize } from 'sequelize'
import { IUnidadeRepositoryAdapter } from '../../interfaces/adapters/IUnidadeRepositoryAdapter.interface'
import { IUnidade } from '../../interfaces/IUnidade.interface'
import { UnidadeSequelize, buildUnidadeModel } from './entities/UnidadeSequelize.entity'

export class UnidadeRepositorySequelize implements IUnidadeRepositoryAdapter {
  constructor (private sequelize: Sequelize, tableName: string) {
    const unidadeModel = buildUnidadeModel(sequelize, tableName)
    unidadeModel.sync()
  }

  createUnidade (unidade: IUnidade): Promise<IUnidade> {
    const unidadeCreated = UnidadeSequelize.create(unidade)
    return unidadeCreated
  }

  async getUnidadeByunidadeId (unidadeId: number): Promise<IUnidade> {
    return await UnidadeSequelize.findOne({
      where: {
        unidadeId
      }
    })
  }
}
