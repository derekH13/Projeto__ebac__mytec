import { TipoDados, DadosType, tipoCategoria,  Categoria} from "../Interface/Interface";


export class Util{


    static async requisicaoDados(tipo: TipoDados): Promise<DadosType[] | undefined>{
        try{
            const response = await fetch(`https://derek576.pythonanywhere.com/api/${tipo}/`)

            if(!response.ok){
                throw new Error(`falha na requisição ${response.status}`)
            }

            const result: DadosType[] = await response.json()

            return result

        }catch(error){
            console.error(error)
            return undefined
        }
    }


    static async ProdutosCategoria(categoria: tipoCategoria): Promise<Categoria[] | undefined>{
        try{
            const response = await fetch(`https://derek576.pythonanywhere.com/api/produto/categoria/${categoria}`)

            if(!response.ok){
                throw new Error(`falha na requisição ${response.status}`)
            }

            const result: Categoria[] = await response.json()

            return result

        }catch(error){
            console.error(error)
            return undefined
        }
    }
}