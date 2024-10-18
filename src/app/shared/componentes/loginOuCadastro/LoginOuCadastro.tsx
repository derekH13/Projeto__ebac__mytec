import { useContext } from 'react'
import '../../../../styles/styles.css'
import AppContext from '../../contexts/AppContext'
import FormCadastro from '../FormCadastro/FormCadastro'
import Cadastro__login from '../Cadastro__login/Cadastro__login'



function LoginOuCadastro(){
    const {loginCadastro, setLoginCadastro} = useContext(AppContext)


    return(
<div className='loginOuCadastro add__justify'>



{
    loginCadastro? <FormCadastro textButtom='cadastrar' identificacao={false} methodo='POST' logo={true}/>
    : <Cadastro__login />
}


</div>
    )
}


export default LoginOuCadastro