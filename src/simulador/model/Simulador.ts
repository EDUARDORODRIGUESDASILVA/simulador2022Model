import { IAnoMes } from "../interfaces/AnoMes.interface";
import { IProdutoSimulador } from "../interfaces/simulador/ProdutoSimulador.interface";
import { ISimulador } from "../interfaces/simulador/Simulador.interface";
import { ISimuladorParams } from "../interfaces/simulador/SimuladorParams.interface";
import { IUnidade } from "../interfaces/Unidade.interface";

export class Simulador implements ISimulador {
    id: number;

    constructor(
        readonly unidade: IUnidade,
        readonly anomes: IAnoMes,
        readonly params: ISimuladorParams,
        readonly produtos: IProdutoSimulador[]
    ) {}

}