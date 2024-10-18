import '../../../../styles/styles.css'
import * as S from './style'

export type propsAlert = {
    titulo: 'sucesso' | 'erro' | 'cuidado'
    text?: string
}

const Alert = ({text, titulo}: propsAlert) => {
    return(
        <S.alertEstilo className='alertContainer' color={titulo}>
            <S.tituloEstilo color={titulo}>{titulo}</S.tituloEstilo>

            <p>{text}</p>
        
            <div>.</div>
        </S.alertEstilo>
    )
}

export default Alert