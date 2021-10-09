import { IAnoMes } from "../AnoMes.interface";
import { IProdutoRealizado } from "../ProdutoRealizado.interface";

export enum ProdutoData {
    D0 = 'D0',
    D1 = 'D1',
    D2 = 'D2',
    D3 = 'D3'
}
export interface ProdutoRealizadoRepositoryAdapter {
    getProdutoRealizado(anomes: IAnoMes, unidadeId: number, dia: ProdutoData): IProdutoRealizado
}