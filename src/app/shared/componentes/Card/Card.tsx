import '../../../../styles/styles.css'


function Card(){
    return(
        <div className='card__produtos'>
            <img className='card__produtos__imagem' src="/assets/images/GPS.jpg" alt="" />

            <div className="card__produtos__content">
                <p className="text--big">roupa nike air pro tk200 2032/2</p>

                <div className="card__produtos__content__precos">

                    <div className="container__preco text-preco">
                        R$ 44,90
                    </div>

                    <p className="text-preco preco-original">R$ 54,90</p>

                </div>

                <button className="button button--dark">Comprar</button>
            </div>
        </div>
    )
}

export default Card