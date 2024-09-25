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
                <div className="tela-fundo">
                    <img src="/assets/images/Background.png" alt="" />
                </div>

                <ZapContato />
                <BalaoMensagem />

                <Hero />

                <CarousselInfinite />

                <Manutencao />

                <Local />
            </Provider> 
        </section>
    )

}