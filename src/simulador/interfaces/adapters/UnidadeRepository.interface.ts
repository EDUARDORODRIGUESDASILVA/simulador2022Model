import { IUnidade } from "../Unidade.interface";

export interface IUnidadeRepositoryAdapter {
    getUnidadeByunidadeId(unidadeId: number): IUnidade
}