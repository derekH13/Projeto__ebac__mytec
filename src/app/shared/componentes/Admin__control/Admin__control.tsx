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


    function ClicouContainer(e: any){

        setPesquisaDados(onclick)

        const container = e.target.parentNode.parentNode
        const containers = document.querySelectorAll('.admin__control')
        containers.forEach(item => {
            item.classList.remove('active')
        })


        container.classList.add('active')
        
    }


    return(
        <div
        onClick={(e) => ClicouContainer(e)}
        className='admin__control'>
            <div className="admin__control__imagem">
            <img src={imagem} alt="" />
            </div>

            <h1 className='title'>{title}</h1>
        </div>
    )
}

export default Admin__control