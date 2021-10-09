import { IAnoMes } from "../AnoMes.interface";
import { IProdutoParametros } from "../ProdutoParametros.interface";

export interface IProdutoParametrosFactory {
    getProdutoParametros(grupoId: number, anomes: IAnoMes): IProdutoParametros[]
}