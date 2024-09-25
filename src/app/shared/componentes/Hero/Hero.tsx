import '../../../../styles/styles.css'



function Hero(){
    return(
        <section className='hero'>
           <div className="hero__alinhar">
           <div className="hero__content">
                <h1>
                <span className='title--big'> 
                    Tecnologia evolui, e <span className="bold">nós também!</span> Conheça nossas promoções e novidades de <span className="text--gradient bold">ultima geração!</span>
                </span>
                    <p className='text'>
                    Tem alguma dúvida ou precisa de ajuda? Entre em contato estamos prontos para oferecer o suporte que você precisa!
                    </p>
                    
                </h1>

                <div className="hero__content__buttons">
                    <button className='button button--gradiente'>
                    Produtos
                    </button>

                    <button className='button button--dark'>
                        PRODUTOS
                    </button>
                </div>
            </div>

            <div className="hero__imagem">
            <img src="./assets/images/hero.png" alt="" />
            </div>
           </div>
        </section>
    )
}

export default Hero