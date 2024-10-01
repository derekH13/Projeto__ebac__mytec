import { useContext } from 'react'
import '../../../../styles/styles.css'
import AppContext from '../../contexts/AppContext'


function Title_admin(){

    const { pesquisaDados, setPesquisaDados } = useContext(AppContext)


    return(
        <h1 className="titulo">
        <span className='titulo--dados interface'>

        Analise de dados dos {pesquisaDados}
        </span>
    </h1>
    )
}

export default Title_admin