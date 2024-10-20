import styled from "styled-components";

type props = {
    active: boolean
}

export const Botao = styled.button<props>`
    background-color: ${props => props.active === true ? 'white' : 'transparent'};
    color: ${props => props.active === true ? 'black' : 'white'};
`