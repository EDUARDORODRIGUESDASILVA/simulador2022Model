import { IAnoMes } from "../AnoMes.interface";

export interface IAnoMesRepositoryAdapter {
    getAnoMesById(anomes: number): IAnoMes   
}