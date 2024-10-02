import '../../../../styles/styles.css'

type props = {
    title: string,
    imagem: string,
    price: number
}


function Cart__Card({title, imagem, price}: props){
    return(
        <div className='Cart__Card'>
            <img src={imagem} alt="" />

            <div className="Cart__Card__content">
                <div className="Cart__Card__content__flex">
                    <h3 className="title">{title}</h3>

                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </div>

                <div className="Cart__Card__content__prices">
                    <h3 className='price'>
                        {price}
                    </h3>

                    <h3 className='price__Original'>
                         {price}
                    </h3>
                </div>
            </div>

        </div>
    )
}

export default Cart__Card