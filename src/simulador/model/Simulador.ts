import { IAnoMes } from '../interfaces/IAnoMes.interface'
import { IProdutoSimulador } from '../interfaces/simulador/IProdutoSimulador.interface'
import { ISimulador } from '../interfaces/simulador/ISimulador.interface'
import { ISimuladorParams } from '../interfaces/simulador/ISimuladorParams.interface'
import { IUnidade } from '../interfaces/IUnidade.interface'

export class Simulador implements ISimulador {
  constructor (
    public readonly unidade: IUnidade,
    public readonly anomes: IAnoMes,
    public readonly params: ISimuladorParams,
    public readonly produtos: IProdutoSimulador[],
    public readonly id?: number
  ) {
    if (!id) {
      this.id = 0
    }
  }
}
