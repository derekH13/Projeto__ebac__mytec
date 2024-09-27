import '../../../../styles/styles.css'
import { Categoria } from '../../../Interface/Interface'


type card = {
    nome: string,
    imagem: string,
    preco: number,
}


function Card({nome, imagem, preco}: card){
    return(
        <div className='card__produtos'>
            <img className='card__produtos__imagem' src={imagem} alt="" />

            <div className="card__produtos__content">
                <p className="text--big">{nome}</p>

                <div className="card__produtos__content__precos">

                    <div className="container__preco text-preco">
                        R$ {preco}
                    </div>

                    <p className="text-preco preco-original">R$ {preco + 10}</p>

                </div>

                <button className="button button--dark">Comprar</button>
            </div>
        </div>
    )
}

export default Card