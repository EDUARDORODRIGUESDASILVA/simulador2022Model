import { IAnoMes } from '../IAnoMes.interface'
import { IProdutoRealizado } from '../IProdutoRealizado.interface'
import { ProdutoDX } from './EProdutoDX.enum'

export interface ProdutoRealizadoRepositoryAdapter {
    getProdutoRealizado(anomes: IAnoMes, unidadeId: number, dia: ProdutoDX): IProdutoRealizado
}
