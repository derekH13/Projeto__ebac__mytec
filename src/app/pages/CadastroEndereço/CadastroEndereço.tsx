import { useState } from "react"
import Container__dados from "../../shared/componentes/Container__dados/Container__dados"
import Dados__form from "../../shared/componentes/Dados__form/Dados__form"
import Fotter from "../../shared/componentes/Fotter/Fotter"
import Navbar from "../../shared/componentes/Navbar/Navbar"
import Provider from "../../shared/contexts/Provider"



export const CadastroEndereço = () => {
    const [formaPagamento, setFormaPagamento] = useState(false)

    return (
    <Provider>
        <section className="Dados">
            <Navbar active="none" />

            <div className="Dados__form">
                <Container__dados>
                    <Dados__form />
                </Container__dados>

                <Container__dados>

                <div>
                    <h1 className="title">Pagamento</h1>




                    <div className="Dados__form__button">
                        <button 
                        onClick={() => setFormaPagamento(true)}
                        className="button button--white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-upc" viewBox="0 0 16 16">
                            <path d="M3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0z"/>
                            </svg>
                            Boleto
                        </button>
                        <button 
                        onClick={() => setFormaPagamento(false)}
                        className="button button--dark">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-credit-card-2-front" viewBox="0 0 16 16">
                            <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
                            <path d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5"/>
                        </svg>
                            Credito
                        </button>
                    </div>

                    
                    {
                        formaPagamento ? (
                            <p className="text text__dados">
                            Escolher o boleto bancário como forma de pagamento é uma opção segura e prática. Ideal para quem não possui cartão de crédito, o boleto permite que você pague diretamente em caixas eletrônicos ou pelo Internet Banking.
                            Lembre-se que o processamento do pagamento pode levar aproximadamente 3 dias úteis para confirmação. Durante esse período, seu pedido ficará em "aguardando pagamento".
                            Aproveite a segurança do boleto e faça suas compras com tranquilidade!
                        </p>
                        ) : (
                            
                            <form>
                            <div className="alinhar__input1">
                                <span>
                                    <label htmlFor="">Nome do titular do cartão</label>
                                    <input required type="text" className="input--dark" />
                                </span>

                                <span>
                                    <label htmlFor="">CPF do titular do cartão</label>
                                    <input required type="text" className="input--dark" />
                                </span>

                                <span>
                                    <label htmlFor="">Nome no cartão</label>
                                    <input required type="text" className="input--dark" />
                                </span>

                            </div>

                       
                            <div className="alinhar__input3">
                                <span>
                                    <label htmlFor="">Número do cartão</label>
                                    <input required type="text" className="input--dark" />
                                </span>

                                <span>
                                    <label htmlFor="">CVV</label>
                                    <input required type="text" className="input--dark" />
                                </span>

                                <span className="">
                                    <label htmlFor="">Mês do vencimento</label>
                                    <input required type="text" className="input--dark" />
                                </span>

                                <span>
                                    <label htmlFor="">Ano do vencimento</label>
                                    <input required type="text" className="input--dark" />
                                </span>
                            </div>     

                            <div className="alinhar__input2">


                                <span>
                                    <label htmlFor="">Parcelamento</label>
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            opeções de parcelamento
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">1x de R$ TOTAL</a></li>
                                            <li><a className="dropdown-item" href="#">1x de R$ TOTAL</a></li>
                                            <li><a className="dropdown-item" href="#">1x de R$ TOTAL</a></li>
                                        </ul>
                                    </div>
                                </span>
                            </div>
                        </form>
                        )
                    }
                </div>
                </Container__dados>

                <div className="interface ">
                    <div className="alinhar__button__dados">
                        <button className="button button--gradiente">
                            Finalizar compra
                        </button>
                    </div>
                </div>
            </div>
                


            <Fotter />
        </section>
    </Provider>
    )
}
