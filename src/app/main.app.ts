import { IUnidade } from '../simulador/interfaces/IUnidade.interface'
// import { factories } from './config/db.sequelize'
import { factories, repoInit } from './config/db.json'
export class SimuladorMainApp {
  private async loadUnidade () {
    const unidadeFactory = factories.unidadeFactory
    try {
      const unidade: IUnidade = {
        unidadeId: 2625,
        nome: 'Floripa',
        parentId: 5094,
        tipo: 'SR',
        grupo: 32
      }
      await unidadeFactory.createUnidade(unidade)
    } catch (error) {
      console.log('Falha ao criar', error.message)
    }
  }

  private async findUnidade (unidadeId:number) {
    const unidadeFactory = factories.unidadeFactory
    const unidade = await unidadeFactory.getUnidadeByUnidadeId(unidadeId)
    return unidade
  }

  async run () {
    try {
      await repoInit()
      await this.loadUnidade()
      const unidade = await this.findUnidade(2625)
      console.log(unidade.formatedNome())
    } catch (error) {

    }
  }
}
