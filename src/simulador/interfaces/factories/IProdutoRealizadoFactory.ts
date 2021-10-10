import { ProdutoDX } from '../adapters/EProdutoDX.enum'
import { IAnoMes } from '../IAnoMes.interface'
import { IProdutoRealizado } from '../IProdutoRealizado.interface'

export interface IProdutoRealizadoFactory {
    getProdutoRealizado(anomes: IAnoMes, unidadeId: number, data: ProdutoDX): IProdutoRealizado[]
}
