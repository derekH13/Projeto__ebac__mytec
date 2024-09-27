import '../../../styles/styles.css'
import Caroussel_destaque from '../../shared/componentes/Caroussel_destaque/Caroussel_destaque'
import Fotter from '../../shared/componentes/Fotter/Fotter'
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
                    <Input text={'Busque pelo produto aqui!'}/>

                        <div className="dropdown">
                        <button className="btn button--dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorias
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark">
                            <li><a className="dropdown-item active" href="#">Televisão</a></li>
                            <li><a className="dropdown-item" href="#">Celular</a></li>
                            <li><a className="dropdown-item" href="#">Fone</a></li>
                            <li><a className="dropdown-item" href="#">Tablet</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                        </div>

                    <Produtos__catalogo />
                </div>
                



                <Fotter />
            </div>
                


            </section>
        </Provider>
    )
}