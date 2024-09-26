import '../../../../styles/styles.css'
import Sociais from '../Sociais/Sociais'


function Fotter(){
    return(
    <footer className='footer'>
        <div className="footer__container">
            <div className="footer__container__info">
                <ul className='footer__container__info__items'>
                    <li className='footer__container__info__items__item'>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                            </svg>
                        </span>
                        <h3>
                            Rua igarapé das rosas 20° <br />
                            São paulo, sp
                        </h3>
                    </li>
                    <li className='footer__container__info__items__item'>
                        <span>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
                            </svg>

                        </span>
                        <h3>
                            +11 91234-1234
                        </h3>
                    </li>
                    <li className='footer__container__info__items__item'>
                        <span>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"/>
                            <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"/>
                            </svg>

                        </span>
                        <h3>
                            <a href="#">emailseila@gmail.com</a>
                        </h3>
                    </li>
                </ul>

            </div>
            <div className='footer__container__sociais'>

                <Sociais />

            </div>
        </div>
    </footer>
    )
}



export default Fotter