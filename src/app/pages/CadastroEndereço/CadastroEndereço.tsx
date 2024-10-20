import { useRef, useState } from "react"
import Container__dados from "../../shared/componentes/Container__dados/Container__dados"
import Dados__form from "../../shared/componentes/Dados__form/Dados__form"
import Fotter from "../../shared/componentes/Fotter/Fotter"
import Navbar from "../../shared/componentes/Navbar/Navbar"
import Provider from "../../shared/contexts/Provider"
import Form__credito from "../../shared/componentes/Form__credito/Form__credito"
import ConfirmarCompra from "../../shared/componentes/ConfirmarCompra/ConfirmarCompra"
import { useSelector } from "react-redux"
import { RootReducer } from "../../../store/store"
import { Botao } from "./style"



export const CadastroEndereço = () => {
    const [formaPagamento, setFormaPagamento] = useState(false)
    const [mostrarConfirmar, setMostrarConfirmar] = useState(false)
    const Logindados = useSelector((state: RootReducer) => state.login.itens)
    const formadepagamento = useRef<'Boleto' | 'Credito'>('Boleto')
    const [btnActive, setBtnActive] = useState<boolean>(false)

    function finalizarCompra(){
        const Endereco = localStorage.getItem('Endereco')
        const cartaoCredito = localStorage.getItem('cartaoCredito')

        if(Endereco && cartaoCredito){
            setMostrarConfirmar(true)
            
        }else{
            console.log('erro ao achar cadastro de enderco e cartao');
            
        }
        
    }

    console.log(Logindados);
    


    if(formaPagamento){
        formadepagamento.current = 'Boleto'
    } else {
        formadepagamento.current = 'Credito'
    }
        

    return (
    <Provider>
        <Navbar active="none" />
        {
           Logindados.length > 0  ? (
                <section className="Dados">
                
    
                {
                    mostrarConfirmar && (
                        <ConfirmarCompra formadepagamento={formadepagamento.current} />
                    )
                }
    
                
    
                <div className="Dados__form">
                    <Container__dados>
                        <Dados__form />
                    </Container__dados>
    
                    <Container__dados>
    
                    <div>
                        <h1 className="title">Pagamento</h1>
    
    
    
    
                        <div className="Dados__form__button">
                            <Botao 
                            active={btnActive}
                            onClick={() => {
                                setFormaPagamento(true)
                                setBtnActive(true)
                            }}
                            className="button button--dark">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-upc" viewBox="0 0 16 16">
                                <path d="M3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0z"/>
                                </svg>
                                Boleto
                            </Botao>
                            <Botao 
                            active={!btnActive}
                            onClick={() => {
                                setFormaPagamento(false)
                                setBtnActive(false)
                            }}
                            className="button button--dark">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-credit-card-2-front" viewBox="0 0 16 16">
                                <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
                                <path d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5"/>
                            </svg>
                                Credito
                            </Botao>
                        </div>
    
                        
                        {
                            formaPagamento ? (
                                <p className="text text__dados">
                                Escolher o boleto bancário como forma de pagamento é uma opção segura e prática. Ideal para quem não possui cartão de crédito, o boleto permite que você pague diretamente em caixas eletrônicos ou pelo Internet Banking.
                                Lembre-se que o processamento do pagamento pode levar aproximadamente 3 dias úteis para confirmação. Durante esse período, seu pedido ficará em "aguardando pagamento".
                                Aproveite a segurança do boleto e faça suas compras com tranquilidade!
                            </p>
                            ) : (
                                
                               <Form__credito />
                            )
                        }
                    </div>
                    </Container__dados>
    
                    <div className="interface ">
                        <div className="alinhar__button__dados">
                            <button onClick={() => finalizarCompra()} className="button button--gradiente">
                                Finalizar compra
                            </button>
                        </div>
                    </div>
                </div>
                    
    
    
                <Fotter />
            </section>
             ) : 
             (
                <section className="Dados__Bloqueio">
                    <h1 className="title">Faça seu cadastro primeiro para poder prosseguir</h1>

                    <Fotter />
                </section>
             )
        }
    </Provider>
    )
}
