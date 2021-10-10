/* eslint-disable no-useless-constructor */
import { IUnidade } from '../interfaces/IUnidade.interface'

export class Unidade implements IUnidade {
  constructor (
    public readonly unidadeId: number,
    public readonly nome: string,
    public readonly parentId: number,
    public readonly tipo: string,
    public readonly grupo: number) {}

  formatedNome () {
    const codUnidade = this.unidadeId
    const nome = this.nome
    const tipo = this.tipo
    return `${codUnidade} - ${tipo} ${nome}`
  }
}
