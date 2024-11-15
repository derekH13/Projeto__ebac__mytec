import { useContext } from 'react'
import '../../../styles/styles.css'
import FormCadastro from '../../shared/componentes/FormCadastro/FormCadastro'
import Navbar from '../../shared/componentes/Navbar/Navbar'
import Transition from '../../shared/componentes/Transition/Transition'
import Provider from '../../shared/contexts/Provider'
import AppContext from '../../shared/contexts/AppContext'
import LoginOuCadastro from '../../shared/componentes/loginOuCadastro/LoginOuCadastro'


export function Cadastro(){

   


    return(
        <Provider>
            <section className="cadastro">
            
                <Navbar active='cadastro' />


                <Transition />


                <div className="row">
                    <div className="col-xxl-9 col-lg-8 col-sm-12 cadastro__imagem">
                        <img src="/assets/images/Cadastro.jpg" alt="" />
                    </div>

                    <div className="col-xxl-3 col-lg-4 col-sm-12 container__formCadastro">
 
                        <LoginOuCadastro />
                    </div>
                </div>







            
            
            </section>
        </Provider>
    )
}
