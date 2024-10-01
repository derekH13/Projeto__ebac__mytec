import { useNavigate } from 'react-router-dom'
import '../../../../styles/styles.css'



function Hero(){
    const navegar = useNavigate()


    return(
        <section className='hero'>
           <div className="hero__alinhar">
                <div className="hero__content">
                    <h1>
                    <span className='title--big desktop'> 
                        Tecnologia evolui<span className="bold">, nós também!</span>  Conheça nossas promoções e novidades de <span className="text--gradient bold">ultima geração!</span>
                    </span>

                    <span className='title--big mobille'> 
                        Conheça nossas promoções e novidades de <span className="text--gradient bold">ultima geração!</span>
                    </span>

                        <p className='text'>
                        Tem alguma dúvida ou precisa de ajuda? Entre em contato estamos prontos para oferecer o suporte que você precisa!
                        </p>
                        
                    </h1>

                    <div className="hero__imagem mobille">
                        <img className='mobille' src="./assets/images/hero.png" alt="" />
                    </div>

                    <div className="hero__content__buttons">
                        <button
                        onClick={() => navegar('/pagina-Produtos')}
                        className='button button--gradiente'>
                        Produtos
                        </button>

                    </div>
                </div>

                <div className="hero__imagem desktop">
                    <img className='desktop' src="./assets/images/hero.png" alt="" />
                </div>
           </div>
        </section>
    )
}

export default Hero