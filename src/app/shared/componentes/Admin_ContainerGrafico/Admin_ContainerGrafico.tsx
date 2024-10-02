import '../../../../styles/styles.css'
import Grafico from '../Grafico/Grafico'
import { TipoDados } from '../../../Interface/Interface'
import { useEffect, useRef, useState } from 'react'
import { Util } from '../../../Util/Util'
import AppContext from '../../contexts/AppContext'
import { DadosType } from '../../../Interface/Interface'
import { objDados } from '../../../data/data'

type props = {
    tipo: TipoDados
}


function Admin_ContainerGrafico({tipo}: props){
    const [dadosGrafico, setDadosGrafico] = useState<DadosType[] | undefined>(objDados)



useEffect(() => {
    Util.requisicaoDados(tipo).then(data => {
        setDadosGrafico(data)
    })


    
},[tipo])










    return(
        <div>
                <Grafico info={[
                ["Task", "Hours per Day"],
                ["Work", 11],
                ["Eat", 20],
                ["Commute", 2],
                ["Sleep", 7],
                ]}/>
              
        </div>
    )
}


export default Admin_ContainerGrafico