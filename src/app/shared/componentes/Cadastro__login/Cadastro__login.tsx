import { useContext } from 'react'
import '../../../../styles/styles.css'
import AppContext from '../../contexts/AppContext'



function Cadastro__login(){

    const {loginCadastro, setLoginCadastro} = useContext(AppContext)

    function mandarLogin(e: any){

    }





    return(
        <div className='FormCadastro'>
            
                logo? <img className='FormCadastro__logo' src="/assets/images/logo.png" alt="" /> : ''
            
            
            <form 
            onSubmit={(e) => mandarLogin(e)}
            action="" className='FormCadastro__form'>


                <label htmlFor="Email">Email:</label>
                <input 
                type="text" required id='Email' className='input--dark'/>

                <label htmlFor="senha">Senha:</label>
                <input 
                type="text" required id='senha' className='input--dark'/>

                <button type='submit' className='button button--gradiente'>Cadastrar</button>

                <p 
                onClick={() => setLoginCadastro(!loginCadastro)}
                className='text'>Não tenho uma conta, click aqui para fazer o Cadastro</p>
            </form>
        </div>
    )
}


export default Cadastro__login