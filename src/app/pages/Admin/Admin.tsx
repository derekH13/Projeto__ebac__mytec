import '../../../styles/styles.css'
import Admin__control from '../../shared/componentes/Admin__control/Admin__control'
import Navbar from '../../shared/componentes/Navbar/Navbar'
import ZapContato from '../../shared/componentes/ZapContato/ZapContato'
import Provider from '../../shared/contexts/Provider'


export const Admin = () => {
    return(
    <Provider>
        <section className='admin'>

            <Navbar />
            <ZapContato />

            <div className="container_control">
                <Admin__control imagem='/assets/images/control (3).jpg' title='Usuarios'/>
                <Admin__control imagem='/assets/images/control (2).jpg' title='Produtos'/>
                <Admin__control imagem='/assets/images/control (1).jpg' title='Compras'/>
            </div>

        </section>
    </Provider>
    )
}
