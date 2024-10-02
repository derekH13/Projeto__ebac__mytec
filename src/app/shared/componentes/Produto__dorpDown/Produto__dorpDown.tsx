import { useContext } from 'react'
import '../../../../styles/styles.css'
import AppContext from '../../contexts/AppContext'
import { tipoCategoria } from '../../../Interface/Interface'


function Produto__dorpDown(){

    const {pesquisaCatalogo, setPesquisaCatalogo} = useContext(AppContext)

    function definirPesquisaCatalogo(e: any, pesquisa: tipoCategoria){
        e.preventDefault()

        setPesquisaCatalogo(pesquisa)
    }


    return(
        <div className="dropdown">
        <button className="btn button--dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
        </button>
        <ul className="dropdown-menu dropdown-menu-dark">
            <li>
                <a 
                onClick={(e) => definirPesquisaCatalogo(e, 'televisão')}
                className="dropdown-item active" href="#">Televisão</a>
            </li>
            <li>
                <a 
                onClick={(e) => definirPesquisaCatalogo(e, 'celular')}
                className="dropdown-item" href="#">Celular</a>
            </li>
            <li>
                <a 
                onClick={(e) => definirPesquisaCatalogo(e, 'fone')}
                className="dropdown-item" href="#">Fone</a>
            </li>
            <li>
                <a 
                onClick={(e) => definirPesquisaCatalogo(e, 'tablet')}
                className="dropdown-item" href="#">Tablet</a>
            </li>
            <li>
                <a 
                onClick={(e) => definirPesquisaCatalogo(e, 'console')}
                className="dropdown-item" href="#">Console</a>
            </li>
            <li>
                <a 
                onClick={(e) => definirPesquisaCatalogo(e, 'carregador')}
                className="dropdown-item" href="#">Carregador</a>
            </li>

        </ul>
        </div>
    )
}


export default Produto__dorpDown