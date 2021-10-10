import 'dotenv/config'
import { Sequelize } from 'sequelize'
import { UnidadeRepositorySequelize } from '../../simulador/adapters/sequelize/UnidadeRepositorySequelize.adapter'
import { UnidadeFactory } from '../../simulador/factories/UnidadeFactory'

/* eslint-disable no-unused-vars */
enum tableNames {
  unidades = 'Unidades'
}

const sequelize = new Sequelize(process.env.URL)
const repositories = {
  unidadeRepository: new UnidadeRepositorySequelize(sequelize, tableNames.unidades)
}
const factories = {
  unidadeFactory: new UnidadeFactory(repositories.unidadeRepository)
}

async function repoInit () {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}
export { sequelize, repoInit, factories, repositories, tableNames }
