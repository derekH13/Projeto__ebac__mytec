import '../../../styles/styles.css'
import '../../../output.css'


import Admin__control from '../../shared/componentes/Admin__control/Admin__control'
import Navbar from '../../shared/componentes/Navbar/Navbar'
import ZapContato from '../../shared/componentes/ZapContato/ZapContato'
import Provider from '../../shared/contexts/Provider'



import ContainerDados from '../../shared/componentes/ContainerDados/ContainerDados'
import Table from '../../shared/componentes/Table/Table'
import Fotter from '../../shared/componentes/Fotter/Fotter'
import Btn__Conjunto from '../../shared/componentes/Btn__Conjunto/Btn__Conjunto'
import Title_admin from '../../shared/componentes/Title_admin/Title_admin'
import Admin_ContainerGrafico from '../../shared/componentes/Admin_ContainerGrafico/Admin_ContainerGrafico'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../../store/store'

export const Admin = () => {
    const EstaLogado = useSelector((state: RootReducer) => state.login)

    console.log(EstaLogado.itens);
    

    return(
    <Provider>
       {
       (EstaLogado.itens.length > 0  ) ? (

        <section className='admin'>

        <Navbar active='none'/>
        <ZapContato />

        <div className="container_control interface">
            <Admin__control imagem='/assets/images/control (3).jpg' title='Usuarios' onclick='usuario'/>
            <Admin__control imagem='/assets/images/control (2).jpg' title='Produtos' onclick='produto'/>
            <Admin__control imagem='/assets/images/control (1).jpg' title='Compras' onclick='compra'/>
        </div>

        <Title_admin text='Analise de dados dos'/>

        <div className="interface">
            <div className="row">
                <div className="col-lg-6  col-sm-12">
                    <div className="d-flex">
                        
                            <ContainerDados />
                        
                        
                       
                            <ContainerDados />
                       
                    </div>
                    <Admin_ContainerGrafico tipo='usuario'/>
                </div>

                <div className="col-lg-6 col-sm-12">
                    <div className="d-flex">
                        
                            <ContainerDados />
                        
                        
                            <ContainerDados />
                        
                    </div>
                    <Admin_ContainerGrafico tipo='produto'/>
                </div>
            </div>


            <div className="container__table">
                <Btn__Conjunto />


                <Table />
            </div>
        </div>


    <Fotter />

    </section>
       )
       : <h1 className='bold'>Pagina só para que é administrador</h1>
       }
    </Provider>
    )
}
