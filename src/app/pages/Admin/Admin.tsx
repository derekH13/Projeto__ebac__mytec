import '../../../styles/styles.css'
import Chart from 'react-apexcharts'
import ApexCharts from 'apexcharts'


import Admin__control from '../../shared/componentes/Admin__control/Admin__control'
import Navbar from '../../shared/componentes/Navbar/Navbar'
import ZapContato from '../../shared/componentes/ZapContato/ZapContato'
import Provider from '../../shared/contexts/Provider'


import '../../../output.css'
import Grafico from '../../shared/componentes/Grafico/Grafico'
import ContainerDados from '../../shared/componentes/ContainerDados/ContainerDados'
import Table from '../../shared/componentes/Table/Table'
import Fotter from '../../shared/componentes/Fotter/Fotter'

export const Admin = () => {
    return(
    <Provider>
        <section className='admin'>

            <Navbar />
            <ZapContato />

            <div className="container_control interface">
                <Admin__control imagem='/assets/images/control (3).jpg' title='Usuarios' onclick='usuario'/>
                <Admin__control imagem='/assets/images/control (2).jpg' title='Produtos' onclick='produto'/>
                <Admin__control imagem='/assets/images/control (1).jpg' title='Compras' onclick='compra'/>
            </div>

            <h1 className="titulo">
                <span className='titulo--dados interface'>

                Analise de dados dos Produtos
                </span>
            </h1>

            <div className="interface">
                <div className="row">
                    <div className="col-lg-6  col-sm-12">
                        <div className="d-flex">
                            
                                <ContainerDados />
                            
                            
                           
                                <ContainerDados />
                           
                        </div>
                        <Grafico />
                    </div>

                    <div className="col-lg-6 col-sm-12">
                        <div className="d-flex">
                            
                                <ContainerDados />
                            
                            
                                <ContainerDados />
                            
                        </div>
                        <Grafico />
                    </div>
                </div>


                <div className="container__table">
                    <Table />
                </div>
            </div>


        <Fotter />

        </section>
    </Provider>
    )
}
