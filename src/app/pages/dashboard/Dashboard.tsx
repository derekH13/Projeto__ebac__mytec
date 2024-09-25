import { Link } from 'react-router-dom'
import Provider from '../../shared/contexts/Provider'

import '../../../styles/styles.css'
import Hero from '../../shared/componentes/Hero/Hero'
import CarousselInfinite from '../../shared/componentes/CarousselInfinite/CarousselInfinite'
import Manutencao from '../../shared/componentes/Manutencao/Manutencao'
import ZapContato from '../../shared/componentes/ZapContato/ZapContato'
import BalaoMensagem from '../../shared/componentes/BalaoMensagem/BalaoMensagem'
import Local from '../../shared/componentes/Local/Local'



//aqui é uma pagina
export const Dashboard = () => {
    return(
        <section className="home">
            <Provider>

                <ZapContato />
                <BalaoMensagem />

                <Hero />

                <CarousselInfinite />

                <Manutencao />

                <Local />

                <div className="tela-fundo ">
                    <img className='desktop' src="/assets/images/Background.png" alt="" />
                    <img className='mobille' src="/assets/images/mobille-b.png" alt="" />
                </div>
            </Provider> 
        </section>
    )

}