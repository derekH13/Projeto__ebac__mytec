import { FormEvent, useContext, useEffect, useRef, useState } from 'react'
import '../../../../styles/styles.css'
import AppContext from '../../contexts/AppContext'
import { Util } from '../../../Util/Util'
import { User } from '../../../Interface/Interface'
import { DadosType } from '../../../Interface/Interface'
import { useDispatch, useSelector } from 'react-redux'
import { pegarLogin } from '../../../../store/reducres/login'
import { RootReducer } from '../../../../store/store'
import Alert from '../Alert/Alert'

import { propsAlert } from '../Alert/Alert'
import { useNavigate } from 'react-router-dom'


function Cadastro__login(){

    const navegate = useNavigate()
    const {loginCadastro, setLoginCadastro} = useContext(AppContext)
    const login = useSelector((state: RootReducer) => state.login)
    const dispatch = useDispatch()
    const {dadosLogin, setDadosLogin} = useContext(AppContext)

    //para poder mostrar o alert e infoaLERT
    const [MostrarAlert, setMostrarAlert] = useState(false)
    const infoAlert = useRef<propsAlert>({text: 'teste', titulo: 'erro'})

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')



    async function mandarLogin(e: FormEvent){
        e.preventDefault()

        const result: DadosType[] | undefined = await Util.requisicaoDados('usuario').then(data => {
             return data?.filter(item => (item.email.toLowerCase() === email.toLowerCase()) && (item.senha.toLowerCase() === senha.toLowerCase()))
        })  
        

        if(result) dispatch(pegarLogin(result))

        if(result) verificarSucesso(result)
    }
    

    function verificarSucesso(result: DadosType[]){
        //informar o usuario se o login foi feito com sucesso
        if (result && result.length > 0) {
            
            //info do sucesso
            infoAlert.current = {text: 'Login Feito com sucesso!!', titulo: 'sucesso'}

            //mostrar o alert
            setMostrarAlert(true)

            //tirar alerte depois de 2s
            setTimeout(() => {
                setMostrarAlert(false)

                navegate('/pagina-inicial')  
            }, 4490)
            
        }else {

            //info do erro
            infoAlert.current = {text: 'erro ao tentar fazer login', titulo: 'erro'}

            //mostrar o alert
            setMostrarAlert(true)

            //tirar alerte depois de 2s
            setTimeout(() => {
                setMostrarAlert(false)
                
            }, 4490)
            
        }
    }



    


    return(
       <>
        <div className='FormCadastro'>
            
            <img className='FormCadastro__logo' src="/assets/images/logo.png" alt="" /> : ''
          
          
          <form 
          onSubmit={(e) => mandarLogin(e)}
          action="" className='FormCadastro__form'>


              <label htmlFor="Email">Email:</label>
              <input 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              required
              id='Email'
              className='input--dark'/>

              <label htmlFor="senha">Senha:</label>
              <input 
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              type="text" 
              required 
              id='senha' 
              className='input--dark'/>

              <button type='submit' className='button button--gradiente'>Cadastrar</button>

              <p 
              onClick={() => setLoginCadastro(!loginCadastro)}
              className='text'>Não tenho uma conta, click aqui para fazer o Cadastro</p>
          </form>
      </div>

        {
            (MostrarAlert && infoAlert.current) ? (
                <Alert text={infoAlert.current.text} titulo={infoAlert.current.titulo} /> 
            )
            : ''
        }
       </>
    )
}


export default Cadastro__login