import { useState } from 'react'
import '../../../../styles/styles.css'

import { useNavigate } from 'react-router-dom'


function Navbar(){

    const navegar = useNavigate()


    function direcionar(e: any, url: string){
        e.preventDefault()

        navegar(url)
    }




    return(
       <div className="navegation">
         <nav 
        className="navbar navbar__my fixed-top"
        >
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src="/assets/images/logo.png" alt="" />
            </a>

            <div className="desktop container-fluid__navbar__items ">
                <a href="" className=" container-fluid__navbar__items__item button">
                    Inicio
                </a>

                <a
                onClick={(e) => direcionar(e, '/pagina-Produtos')}
                href="" className="container-fluid__navbar__items__item button button--dark">
                    Produto
                </a>

                <a href="" className="container-fluid__navbar__items__item button">
                    Cadastro
                </a>
            </div>

            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Mytec</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Inicial</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Produtos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Cadastro</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Gerenciar</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                        </a>
                        <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
        </nav>
       </div>
    )
}

export default Navbar 