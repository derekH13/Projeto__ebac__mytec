import { useContext, useEffect, useState } from 'react'
import '../../../../styles/styles.css'
import Card from '../Card/Card'
import { Util } from '../../../Util/Util'


import { objCategoria } from '../../../data/data'
import { Categoria } from '../../../Interface/Interface'
import AppContext from '../../contexts/AppContext'

function Produtos__catalogo(){

    const [dadosCategoria, setDadosCategoria] = useState<Categoria[]>(objCategoria)
    const {pesquisaCatalogo, setPesquisaCatalogo} = useContext(AppContext)


    

useEffect(() => {
 Util.ProdutosCategoria(pesquisaCatalogo).then((data) => {

    if(data) setDadosCategoria(data) 
    
 })
}, [pesquisaCatalogo])


console.log(dadosCategoria);



    return(
        <div className='produtos__catalogo'>

        {
            dadosCategoria.map((item) => <Card nome={item.nome_produto} imagem={item.imagem_produto} preco={parseInt(item.preco_produto)} />)
        }


        </div>
    )
}

export default Produtos__catalogo