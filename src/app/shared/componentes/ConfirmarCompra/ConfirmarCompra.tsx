import { useContext, useEffect, useState } from 'react'
import '../../../../styles/styles.css'
import AppContext from '../../contexts/AppContext'
import { cartaoCredito } from '../../../Util/Util'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../../../store/store'
import Alert from '../Alert/Alert'

type confirmar = {
    formadepagamento: string
}

const ConfirmarCompra = ({ formadepagamento }: confirmar) => {
    const dadosLogin = useSelector((state: RootReducer) => state.login)
    
    const [dadosendereco, setDadosEndereco] = useState<any>()
    const [dadosCarrinho, setDadosCarrinho] = useState<any>()
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


console.log(dadosLogin);


    return(
      (dadosendereco && dadosCarrinho && dadosLogin) ? (
        <section className='modal__confirme'>
        <div className='modal__confirme__container text'>
        Confirmação de Dados <br />

        Prezado(a) {dadosLogin.itens[0].nome},  <br />

Agradecemos por sua compra! Para garantir que todas as informações estejam corretas, por favor, confira os dados abaixo: <br />

        Email: {dadosLogin.itens[0].email} <br />
        Endereço: {`${dadosendereco.bairro}, ${dadosendereco.cidade}, ${dadosendereco.estado}` } <br />
        CEP: {dadosendereco.cep} <br />
        Forma de Pagamento: {formadepagamento} <br />
        Se todas as informações estiverem corretas, não é necessário realizar nenhuma ação. Caso haja alguma divergência, entre em contato conosco o quanto antes para que possamos corrigir. <br />

        Agradecemos pela confiança e estamos à disposição para qualquer dúvida. <br />

        Atenciosamente, <br />
        MYTEC <br />
        email.cbed@gmail.com <br />
        www.MYTEC.com <br />
            <button className='button button--white'>Confirmar</button>
        </div>
    </section>
      ): 
      <Alert titulo='cuidado' text='faça o login, e cadastre seus dados para prosseguir com a compra' />
    )
}

export default ConfirmarCompra