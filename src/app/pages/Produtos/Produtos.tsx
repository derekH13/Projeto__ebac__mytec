import '../../../styles/styles.css'
import Caroussel_destaque from '../../shared/componentes/Caroussel_destaque/Caroussel_destaque'
import Fotter from '../../shared/componentes/Fotter/Fotter'
import Input from '../../shared/componentes/Input/Input'
import Navbar from '../../shared/componentes/Navbar/Navbar'
import Produto__dorpDown from '../../shared/componentes/Produto__dorpDown/Produto__dorpDown'
import Produtos__catalogo from '../../shared/componentes/Produtos__catalogo/Produtos__catalogo'
import Produtos__destaque from '../../shared/componentes/Produtos__destaque/Produtos__destaque'
import Title_admin from '../../shared/componentes/Title_admin/Title_admin'
import ZapContato from '../../shared/componentes/ZapContato/ZapContato'
import Provider from '../../shared/contexts/Provider'




export const Produtos = () =>{
    return(
        <Provider>

        <Navbar active='produto'/>

            <section className='produtos'>
                
                

                <ZapContato />

            <div className="produtos__container__destaque">

                

                <Caroussel_destaque />



                <div className="produtos__container__destaque__padding">
                    <Input text={'Busque pelo produto aqui!'}/>

                       <Produto__dorpDown />

                    <Produtos__catalogo />
                </div>
                



                <Fotter />
            </div>
                


            </section>
        </Provider>
    )
}