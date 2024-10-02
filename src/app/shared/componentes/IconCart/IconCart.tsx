import { useContext, useEffect, useState } from 'react'
import '../../../../styles/styles.css'
import AppContext from '../../contexts/AppContext'
import Provider from '../../contexts/Provider'
import Cart__Card from '../Cart__Card/Cart__Card'

import { Categoria } from '../../../Interface/Interface'
import { Util } from '../../../Util/Util'

type Typecart = {
    title: string,
    image: string,
    preco: number
}


function IconCart(){
    const { carrinho, setCarrinho } =  useContext(AppContext)
    const [arrayCart, setArrayCart] = useState<Categoria[][]>() 
    let result: Typecart[] = []

    const savedCarrinho = localStorage.getItem('carrinho')

    if(savedCarrinho){
         result = JSON.parse(savedCarrinho)
        
    }
    
console.log(result);

  
    

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
            <div className="offcanvas-body">
                

                {
                    result && (
                        result.map((item, index) => <Cart__Card title={item.title} imagem={item.image} price={item.preco}/>)
                    )
                }




            </div>
        </div>
        </Provider>
    )
}


export default IconCart