import { Form } from 'react-router-dom'
import '../../../../styles/styles.css'

import { ClassProduto } from '../../../classes/classes'
import Form_Admin from '../Form_Admin/Form_Admin'
import { useContext, useRef } from 'react'
import AppContext from '../../contexts/AppContext'
import { methodos } from '../../../Interface/Interface'
import FormCadastro from '../FormCadastro/FormCadastro'
import ContainerFormCadastro from '../ContainerFormCadastro/ContainerFormCadastro'


function Btn__Conjunto(){

const {abrirFrom, setAbrirForm, pesquisaDados, setPesquisaDados} = useContext(AppContext)
const tipoMethod = useRef<methodos>('POST')
const idAbrir = useRef(false)
const textoParaButton = useRef('')

const formMethod = (item: methodos, aparecer: boolean, textButton: string) => {
    setAbrirForm(!abrirFrom)

    //mudando as informações de parametro do form dependendo dos botao clicado
    tipoMethod.current = item
    idAbrir.current = aparecer
    textoParaButton.current = textButton
}






    return(
        <section>

        {
            (abrirFrom && pesquisaDados === 'produto')? <Form_Admin id={idAbrir.current} methodo={tipoMethod.current}/> : ''
        }

        
        {
            (abrirFrom && pesquisaDados === 'usuario')? <ContainerFormCadastro textButtom={textoParaButton.current} identificacao={idAbrir.current} methodo={tipoMethod.current} /> : ''
        }


        


        <div className='Btn__Conjunto'>
            <button
            onClick={() => formMethod('POST', false, 'Cadastrar')} 
            className='button button__green'>
                Adicionar
            </button>

            <button
            onClick={() => formMethod('PUT', true, 'Editar')} 
            className='button button__yellow'>
                Editar
            </button>

            <button
            onClick={() => formMethod('DELETE', true, 'Deletar')} 
            className='button button__red'>
                Remover
                
            </button>

        </div>
        </section>
    )
}


export default Btn__Conjunto