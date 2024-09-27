import { useEffect, useState } from 'react'
import '../../../../styles/styles.css'
import Card from '../Card/Card'
import { Util } from '../../../Util/Util'


import { objCategoria } from '../../../data/data'
import { Categoria } from '../../../Interface/Interface'

function Produtos__catalogo(){

    const [dadosCategoria, setDadosCategoria] = useState<Categoria[]>(objCategoria)

useEffect(() => {
 Util.ProdutosCategoria('celular').then((data) => {

    if(data) setDadosCategoria(data) 

    
 })
}, [])


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