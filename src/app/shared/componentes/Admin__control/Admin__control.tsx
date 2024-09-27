import { useContext } from 'react'
import '../../../../styles/styles.css'
import AppContext from '../../contexts/AppContext'

type props = {
    imagem: string,
    title: string,
    onclick: string
}


function Admin__control({imagem, title, onclick}: props){

        const {setPesquisaDados} = useContext(AppContext)


    return(
        <div
        onClick={() => setPesquisaDados(onclick)}
        className='admin__control'>
            <div className="admin__control__imagem">
            <img src={imagem} alt="" />
            </div>

            <h1 className='title'>{title}</h1>
        </div>
    )
}

export default Admin__control