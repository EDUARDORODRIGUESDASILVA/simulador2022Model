import { IUnidadeRepositoryAdapter } from "../interfaces/adapters/UnidadeRepository.interface";
import { IUnidadeFactory } from "../interfaces/factories/UnidadeFactory.interface";
import { Unidade } from "../model/Unidade";

export class UnidadeFactory implements IUnidadeFactory {
    
    constructor (
        private unidadeRepository: IUnidadeRepositoryAdapter) {

    }
    getUnidadeByUnidadeId(unidadeId: number): Unidade {
       return this.unidadeRepository.getUnidadeByunidadeId(unidadeId)
    }

}