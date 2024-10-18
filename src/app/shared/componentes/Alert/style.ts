import styled from "styled-components";

type props = {
    color: 'sucesso' | 'erro' | 'cuidado'
}

const colorMap = {
    sucesso: '#28a745',
    erro: '#dc3545',  
    cuidado: '#ffc107' 
}

const background = {
    sucesso: '#255517',
    erro: '#691717',
    cuidado: '#afa731'
}

export const alertEstilo = styled.div<props>`
    border: solid 4px ${(props => colorMap[props.color])};
    background: ${(props => background[props.color])};
    position: absolute;
    top: 77px;
    left: 10px;
    padding: 10px;
    max-width: 300px;
    border-radius: 10px
   
`

export const tituloEstilo = styled.h1<props>`
color: ${(props => colorMap[props.color])};
`