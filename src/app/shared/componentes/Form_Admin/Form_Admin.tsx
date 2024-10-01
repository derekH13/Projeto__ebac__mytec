import { useContext, useRef } from 'react'
import '../../../../styles/styles.css'
import AppContext from '../../contexts/AppContext'

import { ClassProduto } from '../../../classes/classes'
import { methodos } from '../../../Interface/Interface'

type props = {
    id: boolean
    methodo: methodos
}


function Form_Admin({ id, methodo }: props){

    const {abrirFrom, setAbrirForm} = useContext(AppContext)


    const nome = useRef('')
    const identificacao = useRef(0)
    const descricao = useRef('')
    const categoria = useRef('')
    const image = useRef('')
    const preco = useRef('')
    const quantidade = useRef(0)



    function enviarDados(e: any){
        e.preventDefault()

        const novoProduto = new ClassProduto(
            identificacao.current,
            nome.current,
            descricao.current,
            categoria.current,
            image.current,
            preco.current,
            quantidade.current
        )

        novoProduto.CrudProduto(methodo)
        
        
    }



    return(
        <div className='window-admin'>
            <form 
            onSubmit={(e) => enviarDados(e )}
            action="" className='window-admin__form'>

                <div 
                onClick={() => setAbrirForm(!abrirFrom)} 
                className="window-admin__form__close">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </div>

                {
                    id? <input
                    onChange={(e) => identificacao.current = parseInt( e.target.value)}
                    required type="text" placeholder='id' className='input--dark input__primerio'/> : ''
                }
                
                
                <label htmlFor="nome" className='text'>Nome</label>
                <input
                onChange={(e) => nome.current = e.target.value}
                type="text" id='nome' className='input--dark'/>
                
                <label htmlFor="descricao" className='text'>Descrição</label>
                <input
                onChange={(e) => descricao.current = e.target.value}
                type="text"  id='descricao' className='input--dark'/>
                
                <label htmlFor="categoria" className='text'>Categoria</label>
                <input
                onChange={(e) => categoria.current = e.target.value}
                type="text"  id='categoria' className='input--dark'/>
                
                <label htmlFor="UlrImagem" className='text'>Url da imagem</label>
                <input
                onChange={(e) => image.current = e.target.value}
                type="text"  id='UlrImagem' className='input--dark'/>
                
                <div className="flex__form">
                    
                   <div>
                        <label htmlFor="preco" className='text'>Preço</label>
                        <input
                        onChange={(e) => preco.current = e.target.value}
                        type="text" id='preco'  className='input--dark'/>
                   </div>
                    
                    <div>
                        <label htmlFor="quantidade" className='text'>Quantidade</label>
                        <input
                        onChange={(e) => quantidade.current = parseInt(e.target.value)}
                        type="text" id='quantidade' className='input--dark'/>
                    </div>
                </div>

                <button type="submit" className='button button--gradiente'>Cadastrar</button>
            </form>
        </div>
    )
}

export default Form_Admin