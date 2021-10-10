import { IAnoMes } from '../IAnoMes.interface'
import { IUnidade } from '../IUnidade.interface'
import { IProdutoSimulador } from './IProdutoSimulador.interface'
import { ISimuladorParams } from './ISimuladorParams.interface'

export interface ISimulador {
    readonly unidade: IUnidade
    readonly anomes: IAnoMes
    readonly params: ISimuladorParams
    readonly produtos: IProdutoSimulador[]
    readonly id?: number
}
