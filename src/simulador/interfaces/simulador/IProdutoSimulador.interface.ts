import { IAnoMes } from '../IAnoMes.interface'
import { IProdutoParametros } from '../IProdutoParametros.interface'
import { IProdutoRealizado } from '../IProdutoRealizado.interface'

export interface IProdutoSimulador {
    id: number
    parentId: number
    anoMes: IAnoMes
    parametros: IProdutoParametros
    realizado: IProdutoRealizado
    d1: IProdutoRealizado
    d2: IProdutoRealizado
    d3: IProdutoRealizado
    ordem: number
}
