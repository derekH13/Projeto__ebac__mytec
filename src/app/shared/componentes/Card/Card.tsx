import { useContext, useEffect } from 'react'
import '../../../../styles/styles.css'
import { Categoria } from '../../../Interface/Interface'
import AppContext from '../../contexts/AppContext'


type card = {
    nome: string,
    imagem: string,
    preco: number,
}


function Card({nome, imagem, preco}: card){
    const { carrinho, setCarrinho } = useContext(AppContext)




function pegaProduto(e: any){
    const pai = e.target.parentNode
    const titleElement = pai.querySelector('.text--big')
    const priceElement = pai.querySelector('.text-preco')
    const imagemElement = pai.parentNode.querySelector('img')

    const nomeTitle = titleElement.textContent
    const price = priceElement.textContent
    const img = imagemElement.src
    

    //usado apenas para recaregar a pagina de icon após o click no card
    setCarrinho([...carrinho, nomeTitle])





    //procura um local storage
    const x  = localStorage.getItem('carrinho');

    //se não existir um local storage
    if(!x){
        localStorage.setItem('carrinho', JSON.stringify([]))
    }
    
    //se titleElement foi buscado, pega o array carrinho do local storage
    if(titleElement){
        const savedCarrinho = localStorage.getItem('carrinho');

        if(savedCarrinho) {
            const result = JSON.parse(savedCarrinho)

            const objCarrinho = {
                title: nomeTitle,
                image: img,
                preco: price,
                id: result.length
            }


            //add o array do carrinho mais o novo elemento
            localStorage.setItem('carrinho', JSON.stringify([...result, objCarrinho]))
        }

        
    }

    console.log(carrinho.length);
    
    
}



    return(
        <div className='card__produtos'>
            <img className='card__produtos__imagem' src={imagem} alt="" />

            <div className="card__produtos__content">
                <p className="text--big">{nome}</p>

                <div className="card__produtos__content__precos">

                    <p className="container__preco text-preco">
                        R$ {preco}
                    </p>

                    <p className="text-preco preco-original">R$ {preco + 10}</p>

                </div>

                <button 
                onClick={(e) => pegaProduto(e)}
                className="button button--dark">
                    
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M5 3a1 1 0 0 0 0 2h.687L7.82 15.24A3 3 0 1 0 11.83 17h2.34A3 3 0 1 0 17 15H9.813l-.208-1h8.145a1 1 0 0 0 .979-.796l1.25-6A1 1 0 0 0 19 6h-2.268A2 2 0 0 1 15 9a2 2 0 1 1-4 0 2 2 0 0 1-1.732-3h-1.33L7.48 3.796A1 1 0 0 0 6.5 3H5Z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M14 5a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0V8h1a1 1 0 1 0 0-2h-1V5Z" clip-rule="evenodd"/>
                    </svg>

                    Carrinho
                </button>
            </div>
        </div>
    )
}

export default Card