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
                <a 
                onClick={(e) => direcionar(e,'/pagina-Inicio')}
                href="" className=" container-fluid__navbar__items__item button">
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


            <button className="btn button--dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                </svg>
            </button>


            <div className="offcanvas offcanvas-end" data-bs-scroll="true" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Loja Mytec</h5>
                <button type="button" className="btn-close button--dark" data-bs-dismiss="offcanvas" aria-label="Close">

                </button>
            </div>
            <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li 
                    onClick={(e) => direcionar(e,'/pagina-Inicial')}
                    className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Inicial</a>
                    </li>
                    <li
                    onClick={(e) => direcionar(e,'/pagina-Produtos')}
                    className="nav-item">
                        <a className="nav-link" href="#">Produtos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Cadastro</a>
                    </li>
                    <li className="nav-item">
                        <a 
                        onClick={(e) => direcionar(e, '/pagina-Admin')}
                        className="nav-link" href="#">Gerenciar</a>
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