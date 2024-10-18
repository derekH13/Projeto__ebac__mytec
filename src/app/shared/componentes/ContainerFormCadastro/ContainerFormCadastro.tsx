import { useContext } from 'react'
import '../../../../styles/styles.css'
import { methodos } from '../../../Interface/Interface'
import FormCadastro from '../FormCadastro/FormCadastro'
import AppContext from '../../contexts/AppContext'

type props = {
    identificacao: boolean
    methodo: methodos
    textButtom: string
}

function ContainerFormCadastro({identificacao, methodo, textButtom}: props){

    const {abrirFrom, setAbrirForm} = useContext(AppContext)



    return(
        <div className='window-admin'>
            <div className="window-admin__form">

            <div 
                onClick={() => setAbrirForm(!abrirFrom)} 
                className="window-admin__form__close">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </div>

                <FormCadastro textButtom={textButtom} identificacao={identificacao} methodo={methodo} logo={false}/>
            </div>
        </div>
    )
}


export default ContainerFormCadastro