import { ISimuladorFactory } from '../interfaces/factories/ISimuladorFactory.interface'
import { Simulador } from './Simulador'
import { IProdutoSimulador } from '../interfaces/simulador/IProdutoSimulador.interface'
import { IUnidadeFactory } from '../interfaces/factories/IUnidadeFactory.interface'
import { IAnoMesFactory } from '../interfaces/factories/IAnoMesFactory.interface'
import { IProdutoParametrosFactory } from '../interfaces/factories/IProdutoParametrosFactory.interface'
import { ISimuladorParams } from '../interfaces/simulador/ISimuladorParams.interface'
import { IUnidade } from '../interfaces/IUnidade.interface'
import { IAnoMes } from '../interfaces/IAnoMes.interface'
import { ProdutoSimulador } from './ProdutoSimulador'
import { IProdutoRealizadoFactory } from '../interfaces/factories/IProdutoRealizadoFactory'
import { IProdutoRealizado } from '../interfaces/IProdutoRealizado.interface'
import { ProdutoDX } from '../interfaces/adapters/EProdutoDX.enum'

export class SimuladorFactory implements ISimuladorFactory {
    private unidadeFactory: IUnidadeFactory
    private anoMesFactory: IAnoMesFactory
    private produtoParametrosFactory: IProdutoParametrosFactory
    private produtoRealizadoFactory: IProdutoRealizadoFactory

    public getSimulador (unidadeId: number, anomesId: number): Simulador {
      const unidade = this.unidadeFactory.getUnidadeByUnidadeId(unidadeId)
      const anomes = this.anoMesFactory.getAnoMes(anomesId)
      const params: ISimuladorParams = {}
      const produtos: ProdutoSimulador[] = this.createProdutosArray(
        unidade,
        anomes
      )
      const simulador = new Simulador(unidade, anomes, params, produtos)
      return simulador
    }

    private createProdutosArray (
      unidade: IUnidade,
      anoMes: IAnoMes
    ): ProdutoSimulador[] {
      const grupoId = unidade.grupo
      const unidadeId = unidade.id
      const parametros = this.produtoParametrosFactory.getProdutoParametros(
        grupoId,
        anoMes
      )
      const real = this.produtoRealizadoFactory.getProdutoRealizado(
        anoMes,
        unidadeId,
        ProdutoDX.D0
      )
      const d1 = this.produtoRealizadoFactory.getProdutoRealizado(
        anoMes,
        unidadeId,
        ProdutoDX.D1
      )
      const d2 = this.produtoRealizadoFactory.getProdutoRealizado(
        anoMes,
        unidadeId,
        ProdutoDX.D2
      )
      const d3 = this.produtoRealizadoFactory.getProdutoRealizado(
        anoMes,
        unidadeId,
        ProdutoDX.D3
      )

      const produtos: IProdutoSimulador[] = []
      parametros.forEach((l) => {
        const prod: IProdutoSimulador = {
          id: l.id,
          parentId: l.parentId,
          ordem: l.ordem,
          anoMes: anoMes,
          parametros: l,
          realizado: this.findProdutoRealizado(l.id, real),
          d1: this.findProdutoRealizado(l.id, d1),
          d2: this.findProdutoRealizado(l.id, d2),
          d3: this.findProdutoRealizado(l.id, d3)
        }
        produtos.push(prod)
      })

      return produtos
    }

    private findProdutoRealizado (
      id: number,
      produtoRealizadoArray: IProdutoRealizado[]
    ): IProdutoRealizado {
      let p = produtoRealizadoArray.find((p) => p.id === id)
      if (!p) {
        p = {
          id,
          meta: null,
          realizado: null,
          pcEsperado: null,
          pcAtingido: null
        }
      }
      return p
    }
}
