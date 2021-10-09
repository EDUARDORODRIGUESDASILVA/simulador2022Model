import { IAnoMes } from "../AnoMes.interface";
import { IUnidade } from "../Unidade.interface";
import { IProdutoSimulador } from "./ProdutoSimulador.interface";
import { ISimuladorParams } from "./SimuladorParams.interface";

export interface ISimulador {
    id: number
    readonly unidade: IUnidade
    readonly anomes: IAnoMes
    readonly params: ISimuladorParams
    readonly produtos: IProdutoSimulador[]
}