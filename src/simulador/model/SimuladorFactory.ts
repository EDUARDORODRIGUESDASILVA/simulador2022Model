import { ISimuladorFactory } from '../interfaces/factories/SimuladorFactory.interface'
import { Simulador } from './Simulador'
import { IProdutoSimulador } from '../interfaces/simulador/ProdutoSimulador.interface'
import { IUnidadeFactory } from '../interfaces/factories/UnidadeFactory.interface'
import { IAnoMesFactory } from '../interfaces/factories/AnoMesFactory.interface'
import { IProdutoParametrosFactory } from '../interfaces/factories/ProdutoParametrosFactory.interface'
import { ISimuladorParams } from '../interfaces/simulador/SimuladorParams.interface'
import { IUnidade } from '../interfaces/Unidade.interface'
import { IAnoMes } from '../interfaces/AnoMes.interface'
import { ProdutoSimulador } from './ProdutoSimulador'
import { IProdutoRealizadoFactory } from '../interfaces/factories/ProdutoRealizadoFactory'
import { ProdutoData } from '../interfaces/adapters/ProdutoRealizadoRepository.interface'
import { IProdutoRealizado } from '../interfaces/ProdutoRealizado.interface'

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
        ProdutoData.D0
      )
      const d1 = this.produtoRealizadoFactory.getProdutoRealizado(
        anoMes,
        unidadeId,
        ProdutoData.D1
      )
      const d2 = this.produtoRealizadoFactory.getProdutoRealizado(
        anoMes,
        unidadeId,
        ProdutoData.D2
      )
      const d3 = this.produtoRealizadoFactory.getProdutoRealizado(
        anoMes,
        unidadeId,
        ProdutoData.D3
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
      let p = produtoRealizadoArray.find((p) => p.id == id)
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
