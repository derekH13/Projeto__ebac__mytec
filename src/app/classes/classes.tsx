import { Categoria, methodos, User } from "../Interface/Interface";
import { Util } from "../Util/Util";

export class ClassProduto{
    id_produto: number;
    nome_produto: string;
    descricao_produto: string;
    categoria_produto: string;
    imagem_produto: string;
    preco_produto: string;
    estoque_produto: number;

    constructor(
        id_produto: number,
        nome_produto: string,
        descricao_produto: string,
        categoria_produto: string,
        imagem_produto: string,
        preco_produto: string,
        estoque_produto: number,
    ){
        this.id_produto = id_produto;
        this.nome_produto = nome_produto;
        this.descricao_produto = descricao_produto;
        this.categoria_produto = categoria_produto;
        this.imagem_produto = imagem_produto;
        this.preco_produto = preco_produto;
        this.estoque_produto = estoque_produto;
    }


    CrudProduto(methodo: methodos){
        const produtoObj: Categoria = {
            id_produto: this.id_produto,
            nome_produto: this.nome_produto,
            descricao_produto: this.descricao_produto,
            categoria_produto: this.categoria_produto,
            imagem_produto: this.imagem_produto,
            preco_produto: this.preco_produto,
            estoque_produto: this.estoque_produto
        }

        Util.crudProdutos(produtoObj, methodo) 
    }
} 

export class Usuario{
    id: number;
    nome: string;
    email: string;
    genero: string;
    idade: number;
    senha: string;

    constructor(
        id: number,
        nome: string,
        email: string,
        genero: string,
        idade: number,
        senha: string,
    ){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.genero = genero;
        this.idade = idade;
        this.senha = senha;
    }

    CrudUsuario(methodo : methodos){
        const objUsuario: User = {
            id: this.id,
            nome: this.nome,
            email: this.email,
            genero: this.genero,
            idade: this.idade,
            senha: this.senha,
        }

        console.log(objUsuario);
        

        Util.crudUser(objUsuario, methodo)
        

    }
    


}




// add function de get post delete