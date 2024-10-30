import { useContext, useEffect, useState } from 'react'
import '../../../../styles/styles.css'
import AppContext from '../../contexts/AppContext'
import { cartaoCredito } from '../../../Util/Util'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../../../store/store'
import Alert from '../Alert/Alert'



type cardLocation = {
    id: number,
    image: string,
    preco: string,
    title: string
}

type confirmar = {
    formadepagamento: string
    onClick1: () => void
}

const ConfirmarCompra = ({ formadepagamento, onClick1 }: confirmar) => {
    const dadosLogin = useSelector((state: RootReducer) => state.login)
    
    const [dadosendereco, setDadosEndereco] = useState<any>()
    const [dadosCarrinho, setDadosCarrinho] = useState<cardLocation[]>()
    const [dadoscartao, setDadoscartao] = useState<any>()

useEffect(() => {
    const cartaoCredito = localStorage.getItem('cartaoCredito')
    const carrinho = localStorage.getItem('carrinho')
    const endereco = localStorage.getItem('Endereco')

    if(endereco){
        setDadosEndereco(JSON.parse(endereco))
    }
    if(carrinho){
        setDadosCarrinho(JSON.parse(carrinho))
    }
    if(cartaoCredito){
        setDadoscartao(JSON.parse(cartaoCredito))
    }
    
    
    

}, [])


console.log(dadosCarrinho);


    return(
      (dadosendereco && dadosCarrinho && dadosLogin) ? (
        <section className='modal__confirme'>
        <div className='modal__confirme__container text'>

        
        <span className='confirmar__fechar' onClick={onClick1}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-x-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
        </svg>
        </span>

        <h1 className='title'>Confirmação de Dados</h1> <br />

        <div className="mb-3">
        Prezado(a) {dadosLogin.itens[0].nome},  <br />
        </div>

        <div className='mb-4'>
        Agradecemos por sua compra! Para garantir que todas as informações estejam corretas, por favor, confira os dados abaixo: <br />
        </div>

        <div className="container__produtosCart">
            
        {
           dadosCarrinho.length > 0 ? (
            dadosCarrinho.map((item, index) => (
                <div className="cardConfirmar">
                    <img src={item.image} alt="" />

             
                    <div className="preco">
                        {item.preco}
                    </div>
                </div>
            ))
           ) 
           : ''
        }
        </div>



        <span className='bold'>Email:</span> {dadosLogin.itens[0].email} <br />
        <span className='bold'>Endereço:</span> {`${dadosendereco.bairro}, ${dadosendereco.cidade}, ${dadosendereco.estado}` } <br />
        <span className="bold">CEP:</span> {dadosendereco.cep} <br />
        <span className="bold">Forma de Pagamento:</span> {formadepagamento} <br />
       
       <div className="mt-4 mb-4">
       Se todas as informações estiverem corretas, não é necessário realizar nenhuma ação. Caso haja alguma divergência, entre em contato conosco o quanto antes para que possamos corrigir. <br />

        Confirá a confirmação em seu email, estamos a disposição para qualquer duvida!. <br />
       </div>

        Atenciosamente, <br />
        MYTEC <br />
        email.cbed@gmail.com <br />
        www.MYTEC.com <br />
            <button className='button button--white mt-4'>Confirmar</button>
        </div>

    </section>
      ): 
      <Alert titulo='cuidado' text='faça o login, e cadastre seus dados para prosseguir com a compra' />
    )
}

export default ConfirmarCompra