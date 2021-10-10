import { UnidadeRepositoryJson } from '../../simulador/adapters/json/UnidadeRepositoryJson.adapter'
import { UnidadeFactory } from '../../simulador/factories/UnidadeFactory'

const repositories = {
  unidadeRepository: new UnidadeRepositoryJson()
}
const factories = {
  unidadeFactory: new UnidadeFactory(repositories.unidadeRepository)
}

async function repoInit () {
  try {
    await repositories.unidadeRepository.init()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

export { repoInit, factories, repositories }
