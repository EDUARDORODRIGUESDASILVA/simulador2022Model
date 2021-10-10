import { Sequelize, Model, DataTypes } from 'sequelize'
import { IUnidade } from '../../../interfaces/IUnidade.interface'

export class UnidadeSequelize extends Model implements IUnidade {
    unidadeId: number
    nome: string
    parentId: number
    tipo: string
    grupo: number
}

export const buildUnidadeModel = (sequelize: Sequelize, tableName: string) => {
  UnidadeSequelize.init({
    unidadeId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    parentId: {
      type: DataTypes.INTEGER
    },

    nome: {
      type: DataTypes.STRING(40),
      allowNull: false
    },

    tipo: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    grupo: {
      type: DataTypes.INTEGER
    }
  },
  {
    sequelize,
    tableName
  })

  return UnidadeSequelize
}
