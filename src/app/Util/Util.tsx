import { TipoDados, DadosType, tipoCategoria,  Categoria, methodos, User} from "../Interface/Interface";




type local = {
    title: string,
    imagem: string,
    price: number
    id: number
}




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



    //crud Produtos
    static async crudProdutos(objeto: Categoria, methodo: methodos){
        console.log(objeto);
        
        try{
            const response = await fetch(`https://derek576.pythonanywhere.com/api/produto/data/`, {
                method: methodo,
                headers: {
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(objeto) 
            }
            )

            if(!response.ok){
                throw new Error(`falha na requisição ${response.status}`)
            }

            const result = await response.json()
        
            return result

        }catch(error){
            console.error(error)
            return undefined
        }
    }


    static async crudUser(objUser: User, methodo: methodos){
console.log(methodo);

        try{
            const response = await fetch(`https://derek576.pythonanywhere.com/api/usuario/data/`, {
                method: methodo,
                headers: {
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(objUser) 
            })

            if(!response.ok){
                throw new Error(`falha na requisição ${response.status}`)
            }

            const result = await response.json()
            
            return result


        }catch(error){
            console.error(error)
            return undefined
        }
    }

    static async ProdutosCategoriaUnico(nome: string): Promise<Categoria[] | undefined>{
        try{
            const response = await fetch(`https://derek576.pythonanywhere.com/api/produto/data/?produto=${nome}`)

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


    static LocalStage(): local[]{
        let result
 
        const savedCarrinho = localStorage.getItem('carrinho')
        if(savedCarrinho){
            result = savedCarrinho ? JSON.parse(savedCarrinho) : []
            
        }

        return result
    }
}