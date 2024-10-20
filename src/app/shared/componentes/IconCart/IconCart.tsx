import { useContext, useEffect, useState } from 'react'
import '../../../../styles/styles.css'
import AppContext from '../../contexts/AppContext'
import Provider from '../../contexts/Provider'
import Cart__Card from '../Cart__Card/Cart__Card'

import { Categoria } from '../../../Interface/Interface'
import { Util } from '../../../Util/Util'
import { useNavigate } from 'react-router-dom'

type Typecart = {
    title: string,
    image: string,
    preco: number
    id: number
}


function IconCart(){
    const {valorCart, setValorCart} = useContext(AppContext)
    const navegar = useNavigate()

    
    const { carrinho, setCarrinho } =  useContext(AppContext)
    let result: Typecart[] = []

    const savedCarrinho = localStorage.getItem('carrinho')

    if(savedCarrinho){
         result = JSON.parse(savedCarrinho)
    }
 



    
    // Função para deletar o item do carrinho
    function deleteCart(e: React.MouseEvent<HTMLButtonElement>) {
        const result = Util.LocalStage()

        //pega o elemento 
        const elementCart = e.currentTarget; 
        const idToDelete = parseInt(elementCart.dataset.id as string); // Pega o data-id

        //filtra todo menos o id deletado
        const deleteId = result.filter(item => item.id !== idToDelete)

        //faz a pagina recarregar
        setCarrinho(deleteId)
        
        const newCart = JSON.stringify(deleteId)
        localStorage.setItem('carrinho', newCart)

        
    }


    //retorna o valor total do cart
    function valorTotal(): number {
        const soma: number = result.reduce((acumulador, Item) => {
            return acumulador + +Item.preco;
        }, 0);

        const total = parseFloat(soma.toFixed(3)); 

        setValorCart(total)
        
        return total// Arredonda para 2 casas decimais

    }

    //funcao para direcionar para finalizar compra
    const finalizarCompra = () =>{
        navegar('/pagina-Cadastro-Endereço')
    }




    return(
        <Provider>


        <button className="IconCart" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">

            <span>
                {
                    result.length
                }
            </span>

            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0"/>
            </svg>

        </button>

        <div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title title" id="offcanvasScrollingLabel ">Carrinho de compras</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body content__cart">
                

                {
  
                    result && result.map((item, index) => (
                        <div className='Cart__Card'>
                        <img src={item.image} alt="" />
            
                        <div className="Cart__Card__content">
                            <div className="Cart__Card__content__flex">
                                <h3 className="title">{item.title}</h3>
            
                            <button 
                            onClick={(e) => deleteCart(e)}
                            data-id={item.id}
                            type='button'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                                </svg>
                            </button>
            
            
                            </div>
            
                            <div className="Cart__Card__content__prices">
                                <h3 className='price'>
                                    {item.preco}
                                </h3>
            
                                <h3 className='price__Original'>
                                     {item.preco}
                                </h3>
                            </div>
                        </div>
            
                    </div>
                    ))
                    
                }




            </div>

            <div className="iconCart__flex ">
                <div 
                onClick={() => finalizarCompra()}
                className='button button--gradiente'>
                    <h3 className="preco__total ">
                        R$ {valorTotal()}


                        <svg id='svg' style={{display: 'inline'}} className="w-6 h-6 text-gray-800 dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
                    </svg>
                    </h3>
                </div>

            </div>
        </div>
        </Provider>
    )
}


export default IconCart