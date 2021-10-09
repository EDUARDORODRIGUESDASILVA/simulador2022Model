import { ProdutoData } from "../adapters/ProdutoRealizadoRepository.interface";
import { IAnoMes } from "../AnoMes.interface";
import { IProdutoRealizado } from "../ProdutoRealizado.interface";

export interface IProdutoRealizadoFactory {
    getProdutoRealizado(anomes: IAnoMes, unidadeId: number, data: ProdutoData): IProdutoRealizado[]
}