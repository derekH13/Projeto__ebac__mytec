import { useRef } from 'react'
import '../../../../styles/styles.css'

function FormCadastro(){

    const nome = useRef('')
    const email = useRef('')
    const senha = useRef('')
    const senhaR = useRef('')
    const idade = useRef('')
    const genero = useRef('')


    function mandarCadastro(e: any){
        e.preventDefault()

        console.log(nome.current, email.current, senha.current, genero.current);
        
    }







    return(
        <div className='FormCadastro'>
            <img className='FormCadastro__logo' src="/assets/images/logo.png" alt="" />
            
            <form 
            onSubmit={(e) => mandarCadastro(e)}
            action="" className='FormCadastro__form'>
                    
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
                        onChange={(e) => idade.current = e.target.value}
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

                <button type='submit' className='button button--gradiente'>Cadastrar</button>
            </form>
        </div>
    )
}


export default FormCadastro