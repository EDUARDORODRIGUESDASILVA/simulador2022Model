import { IAnoMes } from '../IAnoMes.interface'

export interface IAnoMesFactory {
    getAnoMes(anomesId: number): IAnoMes
}
