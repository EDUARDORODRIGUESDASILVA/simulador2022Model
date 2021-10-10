import { IAnoMes } from '../IAnoMes.interface'
import { IProdutoParametros } from '../IProdutoParametros.interface'

export interface IProdutoParametrosFactory {
    getProdutoParametros(grupoId: number, anomes: IAnoMes): IProdutoParametros[]
}
