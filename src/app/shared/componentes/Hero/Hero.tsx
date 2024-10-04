import { useNavigate } from 'react-router-dom'
import '../../../../styles/styles.css'
import { motion } from "framer-motion"




function Hero(){
    const navegar = useNavigate()


    return(
        <section className='hero'>
           <div className="hero__alinhar">
                <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1.1,
                    ease: "easeInOut",
                    delay: 0.4,
                    type: "spring",
                    stiffness: 100,
                    damping: 10
                }}
                className="hero__content">
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
                        <motion.button
                        whileHover={{ scale: 0.99, opacity: 0.8 }} // Animação ao passar o mouse
                        whileTap={{ scale: 0.85 }} // Animação ao clicar
                        transition={{ duration: .2, ease: 'easeIn' }} // Duração da animação
                        onClick={() => navegar('/pagina-Produtos')}
                        className='button button--gradiente'>
                        Produtos
                        </motion.button>

                    </div>
                </motion.div>

                <div className="hero__imagem desktop">
                    <img className='desktop' src="./assets/images/hero.png" alt="" />
                </div>
           </div>
        </section>
    )
}

export default Hero