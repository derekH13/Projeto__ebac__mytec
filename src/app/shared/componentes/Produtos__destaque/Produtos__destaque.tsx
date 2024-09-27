import '../../../../styles/styles.css'
import Card from '../Card/Card'
import { Categoria, tipoCategoria } from '../../../Interface/Interface'
import { useEffect, useState } from 'react'
import { Util } from '../../../Util/Util'

import { objCategoria } from '../../../data/data'


type props = {
    categoria: tipoCategoria
}

function Produtos__destaque({ categoria }: props){


    const [dataCategoria, setDataCategoria] = useState<Categoria[]>(objCategoria)


    useEffect(() => {

        Util.ProdutosCategoria(categoria).then((data) => {
            if(data) setDataCategoria(data)
        })
    }, [categoria])


    return(
        <div className='Produtos__destaque'>
          <Card  nome={dataCategoria[0].nome_produto}  imagem={dataCategoria[0].imagem_produto} preco={parseInt(dataCategoria[0].preco_produto)} />
          <Card  nome={dataCategoria[1].nome_produto}  imagem={dataCategoria[1].imagem_produto} preco={parseInt(dataCategoria[1].preco_produto)} />
          <Card  nome={dataCategoria[2].nome_produto}  imagem={dataCategoria[2].imagem_produto} preco={parseInt(dataCategoria[2].preco_produto)} />
          <Card  nome={dataCategoria[3].nome_produto}  imagem={dataCategoria[3].imagem_produto} preco={parseInt(dataCategoria[3].preco_produto)} />
        </div>
    )
}

export default Produtos__destaque