import '../../../styles/styles.css'
import Caroussel_destaque from '../../shared/componentes/Caroussel_destaque/Caroussel_destaque'
import Input from '../../shared/componentes/Input/Input'
import Navbar from '../../shared/componentes/Navbar/Navbar'
import Produtos__catalogo from '../../shared/componentes/Produtos__catalogo/Produtos__catalogo'
import Produtos__destaque from '../../shared/componentes/Produtos__destaque/Produtos__destaque'
import ZapContato from '../../shared/componentes/ZapContato/ZapContato'
import Provider from '../../shared/contexts/Provider'


export const Produtos = () =>{
    return(
        <Provider>

        <Navbar />

            <section className='produtos'>
                
                

                <ZapContato />

            <div className="produtos__container__destaque">

                <Caroussel_destaque />



                <div className="produtos__container__destaque__padding">
                    <Input />

                    <Produtos__catalogo />
                </div>
                




            </div>
                


            </section>
        </Provider>
    )
}