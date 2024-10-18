import { useContext, useRef, useState } from 'react'
import '../../../../styles/styles.css'
import { methodos, User } from '../../../Interface/Interface'
import { Usuario } from '../../../classes/classes'
import AppContext from '../../contexts/AppContext'
import Alert, { propsAlert } from '../Alert/Alert'
import { useNavigate } from 'react-router-dom'




type props = {
    identificacao: boolean
    methodo: methodos
    logo: boolean
    textButtom: string
}






function FormCadastro({identificacao, methodo, logo, textButtom}: props){

    const {loginCadastro, setLoginCadastro} = useContext(AppContext)
    const navegate = useNavigate()


    const id = useRef(0)
    const nome = useRef('')
    const email = useRef('')
    const senha = useRef('')
    const senhaR = useRef('')
    const idade = useRef(0)
    const genero = useRef('')

    const [MostrarAlert, setMostrarAlert] = useState(false)
    const infoAlert = useRef<propsAlert>({text: 'teste', titulo: 'erro'})


    function mandarCadastro(e: any){
        e.preventDefault()

        try{
            const User = new Usuario(
                id.current,
                nome.current,
                email.current,
                genero.current,
                idade.current,
                senha.current,
            )

            User.CrudUsuario(methodo)

            //info do sucesso
            infoAlert.current = {text: 'Cadastro Feito com sucesso!!', titulo: 'sucesso'}

            //mostrar o alert
            setMostrarAlert(true)

            //tirar alerte depois de 2s
            setTimeout(() => {
                setMostrarAlert(false)

                navegate('/pagina-inicial')
            }, 4490)
        }catch{

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
        {
            (MostrarAlert && infoAlert.current) ? (
                <Alert text={infoAlert.current.text} titulo={infoAlert.current.titulo} /> 
            )
            : ''
        }
        <div className='FormCadastro'>
            {
                logo? <img className='FormCadastro__logo' src="/assets/images/logo.png" alt="" /> : ''
            }
            
            <form 
            onSubmit={(e) => mandarCadastro(e)}
            action="" className='FormCadastro__form'>

        {
            identificacao? <div>
                <label htmlFor="nome">Id:</label>
                <input 
                onChange={(e) => id.current = parseInt(e.target.value)}
                type="text" required id='id' className='input--dark'/>
            </div>
            : ''
        }


            {
                (!(methodo === 'DELETE')) && (
                    <>
                    <label htmlFor="nome">Nome:</label>
                       <input 
                       onChange={(e) => nome.current = e.target.value}
                       type="text" required id='nome' className='input--dark'/>
       
                       <label htmlFor="Email">Email:</label>
                       <input 
                       onChange={(e) => email.current = e.target.value}
                       type="text" required id='Email' className='input--dark'/>
       
                       <label htmlFor="senha">Senha:</label>
                       <input 
                       onChange={(e) => senha.current = e.target.value}
                       type="text" required id='senha' className='input--dark'/>
       
                       <label htmlFor="senha">Repetir á Senha:</label>
                       <input 
                       onChange={(e) => senhaR.current = e.target.value}
                       type="text" required id='senha' className='input--dark'/>
       
       
                       <label htmlFor="Idade">Idade:</label>
                       <div className="FormCadastro__form__flex">
                               <input 
                               onChange={(e) => idade.current = parseInt( e.target.value)}
                               type="text" required id='Idade' className='input--dark'/>
                         
       
                           <div className="dropdown">
                               <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                   Genero
                               </button>
                               
                               <ul className="dropdown-menu">
                                   <li>
                                       <a 
                                       onClick={() => genero.current = 'mulher'}
                                       className="dropdown-item" href="#">Mulher</a>
                                   </li>
                                   <li>
                                       <a 
                                        onClick={() => genero.current = 'homem'}
                                       className="dropdown-item" href="#">Homem</a>
                                   </li>
                                   <li>
                                       <a 
                                        onClick={() => genero.current = 'nenhum'}
                                       className="dropdown-item" href="#">Nenhum</a>
                                   </li>
                                   <li>
                                       <a 
                                        onClick={() => genero.current = 'outro'}
                                       className="dropdown-item" href="#">Outro</a>
                                   </li>
                               </ul>
                           </div>
                       </div>
                    </>
                )
            }               
                    


                <button type='submit' className='button button--gradiente'>{textButtom}</button>

                <p 
                onClick={() => setLoginCadastro(!loginCadastro)}
                className='text'>ja tenho uma conta, click aqui para fazer o login</p>
            </form>
        </div>
        </>
    )
}


export default FormCadastro