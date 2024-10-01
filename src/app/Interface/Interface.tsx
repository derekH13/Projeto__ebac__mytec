export type TipoDados = 'produto' | 'compra' | 'usuario'
export type tipoCategoria = 'celular' | 'televisão' | 'fone' | 'eletronico' | 'carregador' | 'console' | 'tablet'
export type methodos = 'POST' | 'DELETE' | 'PUT'

export type DadosType = {
    id: number,
    nome: string,
    email: string,
    genero: string,
    idade: number,
    senha: string,
    id_compra: number,
    quantidade_compra:  number,
    data_compra: string,
    user_compra:  number,
    produto_compra: number,
    id_produto: number,
    nome_produto: string,
    descricao_produto: string,
    categoria_produto: string,
    imagem_produto: string,
    preco_produto: string,
    estoque_produto: number,
}


export type Categoria = {
    id_produto: number,
    nome_produto: string,
    descricao_produto: string,
    categoria_produto: string,
    imagem_produto: string,
    preco_produto: string,
    estoque_produto: number,
}