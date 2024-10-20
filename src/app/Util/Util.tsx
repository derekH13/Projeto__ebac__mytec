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


    //para pegar o localstage do navegador
    static LocalStage(): local[]{
        let result
 
        const savedCarrinho = localStorage.getItem('carrinho')
        if(savedCarrinho){
            result = savedCarrinho ? JSON.parse(savedCarrinho) : []
            
        }

        return result
    }


    //formatar preço
    static FormatarPreco(preco: number): string {
        // Converte o preço para string, arredondando para baixo
        const parteInteira = Math.floor(preco).toString(); // Remove a parte decimal
    
        // Adiciona a vírgula nos separadores de milhar
        const formatado = parteInteira.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    
        // Retorna o preço formatado
        return formatado;
    }

    static calcularDesconto(precoOriginal: number, percentualDesconto: number): number {
        // Calcula o valor do desconto
        const desconto = precoOriginal * (percentualDesconto / 100);
        // Calcula o preço final após o desconto
        const precoComDesconto = precoOriginal - desconto;
        return precoComDesconto;
    }                  
    
    
    static descDiminuir(text: string){
        if (text.length > 94){
            return text.slice(0, 86) + '...'
        }
  
        return text
        
    }
    

}


export class DadosEndereco {
    cep: number
    estado: string
    cidade: string
    bairro: string
    numero: number

    constructor(
        cep: number,
        estado: string,
        cidade: string,
        bairro: string,
        numero: number,
    ){
        this.cep = cep
        this.estado = estado
        this.cidade = cidade
        this.bairro = bairro
        this.numero = numero
    }
}

export class cartaoCredito {
    nome: string
    cpf: number
    nomeCartao: string
    numeroCartao: number
    cvv: number
    mesVencimento: string
    anoVencimento: string

    constructor(
        nome: string,
        cpf: number,
        nomeCartao: string,
        numeroCartao: number,
        cvv: number,
        mesVencimento: string,
        anoVencimento: string,
    ){
        this.nome = nome
        this.cpf = cpf
        this.nomeCartao = nomeCartao
        this.numeroCartao = numeroCartao
        this.cvv = cvv
        this.mesVencimento = mesVencimento
        this.anoVencimento = mesVencimento
    }
}