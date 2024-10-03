import { useContext } from 'react'
import '../../../../styles/styles.css'
import AppContext from '../../contexts/AppContext'

type props = {
    text: string
}

function Title_admin({text}: props){

    const { pesquisaDados, setPesquisaDados } = useContext(AppContext)


    return(
        <h1 className="titulo">
        <span className='titulo--dados interface'>

        {text} {pesquisaDados}
        </span>
    </h1>
    )
}

export default Title_admin