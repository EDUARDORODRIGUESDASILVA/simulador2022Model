import { readFileSync, writeFileSync, promises } from 'fs'
import { IUnidadeRepositoryAdapter } from '../../interfaces/adapters/IUnidadeRepositoryAdapter.interface'
import { IUnidade } from '../../interfaces/IUnidade.interface'

const { readFile, writeFile } = promises

export class UnidadeRepositoryJson implements IUnidadeRepositoryAdapter {
   private jsonFile = 'database/json/unidades.json'
   constructor () {
     this.init()
   }

   async createUnidade (unidade: IUnidade): Promise<IUnidade> {
     const fUnidade = await this.getUnidadeByunidadeId(unidade.unidadeId)

     if (fUnidade) {
       throw new Error(`Unidade ${unidade.unidadeId} já existe.`)
     }

     const unidades: IUnidade[] = await this.lerUnidades()
     unidades.push(unidade)
     writeFile(this.jsonFile, JSON.stringify(unidades))

     return (async () => unidade)()
   }

   async getUnidadeByunidadeId (unidadeId: number): Promise<IUnidade> {
     const unidades = await this.lerUnidades()
     return unidades.find(p => p.unidadeId === unidadeId)
   }

   init () {
     try {
       const data = readFileSync(this.jsonFile, { encoding: 'latin1' })
       if (data === '') {
         writeFileSync(this.jsonFile, JSON.stringify([]), { encoding: 'latin1' })
       }
     } catch (error) {
       writeFileSync(this.jsonFile, JSON.stringify([]), { encoding: 'latin1' })
     }
   }

   async lerUnidades (): Promise<IUnidade[]> {
     const data = await readFile(this.jsonFile, { encoding: 'latin1' })
     let a = []
     try {
       a = JSON.parse(data)
     } catch (error) {
     //  console.log(error, data, a)
     }
     return a
   }
}
