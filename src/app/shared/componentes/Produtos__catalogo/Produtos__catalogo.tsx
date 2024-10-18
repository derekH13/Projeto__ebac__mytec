import { motion } from 'framer-motion'
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





    return(
        <motion.div
        initial={{opacity: 0, scale: 0.98}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{
        duration: 1,
        ease: "easeInOut",
        delay: 0.3,
        type: "spring",

        }}
        className='produtos__catalogo'>

        {
            dadosCategoria.map((item) => {
                return <Card nome={item.nome_produto} imagem={item.imagem_produto} preco={parseInt(item.preco_produto)}  desc={item.descricao_produto} />
            } )
        }
    


        </motion.div>
    )
}

export default Produtos__catalogo