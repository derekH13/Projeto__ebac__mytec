import { useContext, useEffect, useState } from 'react';
import '../../../../styles/styles.css'
import { Util } from '../../../Util/Util';

import { DadosType } from '../../../Interface/Interface';
import { objDados } from '../../../data/data';
import AppContext from '../../contexts/AppContext';



function Table(){

    const [dados, setDados] = useState<DadosType[]>(objDados)
    const {pesquisaDados, setPesquisaDados} = useContext(AppContext)
    let cabecalho = ["id","nome","categoria","preco","estoque"]




    if(pesquisaDados === 'produto'){
        cabecalho = [
            "Id",
            "Nome",
            "Categoria",
            "Preco",
            "Estoque"
        ]
    }else if(pesquisaDados === 'usuario'){
        cabecalho = [
            "Id",
            "Nome",
            "Email",
            "Genero",
            "Idade",
        ]

    }else if(pesquisaDados === 'compra'){
        cabecalho = [
            "Id",
            "Qtn",
            "Data",
            "Usuario",
            "Produto"
        ]
    }

    

    useEffect(() => {
        Util.requisicaoDados(pesquisaDados).then((data) => {
            
        if(data) setDados(data)
                         
        })
    },[pesquisaDados])
      

    console.log(dados);






    return(
        <div>
            <table className="table table-dark table-hover">
            <thead>
                <tr>
                    {
                        cabecalho.map((item) => <th scope="col">{item}</th>)
                    }

                </tr>
            </thead>
            <tbody className="table-group-divider">
                
                {
                   pesquisaDados === 'usuario'?                 

                   dados.map((item) => <tr>
                   <th scope="row">{item.id}</th>
                        <td>{item.nome}</td>
                        <td>{item.email}</td>
                        <td>{item.genero}</td>
                        <td>{item.idade}</td>
                   </tr>
                   )
                   : ''
                }

                {
                   pesquisaDados === 'compra'?                 

                   dados.map((item) => <tr>
                   <th scope="row">{item.id_compra}</th>
                        <td>{item.quantidade_compra}</td>
                        <td>{item.data_compra}</td>
                        <td>{item.user_compra}</td>
                        <td>{item.produto_compra}</td>
                   </tr>
                   )
                   : ''
                }

{
                   pesquisaDados === 'produto'?                 

                   dados.map((item) => <tr>
                   <th scope="row">{item.id_produto}</th>
                        <td>{item.nome_produto}</td>
                        <td>{item.categoria_produto}</td>
                        <td>{item.preco_produto}</td>
                        <td>{item.estoque_produto}</td>
                   </tr>
                   )
                   : ''
                }
            </tbody>
            </table>
        </div>
    )
}

export default Table