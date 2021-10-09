import { IAnoMes } from "../AnoMes.interface";
import { IProdutoParametros } from "../ProdutoParametros.interface";
import { IProdutoRealizado } from "../ProdutoRealizado.interface";

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