import { IAnoMes } from '../interfaces/IAnoMes.interface'
import { IProdutoRealizado } from '../interfaces/IProdutoRealizado.interface'
import { IProdutoSimulador } from '../interfaces/simulador/IProdutoSimulador.interface'

export class ProdutoSimulador implements IProdutoSimulador {
        readonly id: number
        readonly parentId: number
        readonly anoMes: IAnoMes
        readonly parametros: any
        readonly realizado: IProdutoRealizado
        readonly d1: IProdutoRealizado
        readonly d2: IProdutoRealizado
        readonly d3: IProdutoRealizado
        public ordem: number
}
