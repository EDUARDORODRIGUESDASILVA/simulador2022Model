import { IAnoMes } from '../IAnoMes.interface'

export interface IAnoMesRepositoryAdapter {
    getAnoMesById(anomes: number): IAnoMes
}
