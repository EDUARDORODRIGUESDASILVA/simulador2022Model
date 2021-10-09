import { ISimulador } from "../simulador/Simulador.interface";

export interface ISimuladorFactory {
     
    getSimulador(unidadeId: number, anomes: number): ISimulador 

}