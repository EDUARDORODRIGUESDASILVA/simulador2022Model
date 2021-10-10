import { ISimulador } from '../simulador/ISimulador.interface'

export interface ISimuladorFactory {

    getSimulador(unidadeId: number, anomes: number): ISimulador

}
