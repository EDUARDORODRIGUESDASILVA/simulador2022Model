import { IAnoMes } from '../AnoMes.interface'

export interface IAnoMesFactory {
    getAnoMes(anomesId: number): IAnoMes
}
