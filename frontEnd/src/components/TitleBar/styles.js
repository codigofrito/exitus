import styled from 'styled-components';
import fundo from "../../assets/fundo.svg";

export const Ondas = styled.img.attrs(props => ({
}))`
    position: absolute;
    bottom: 0px;
    width: 100%
`;

export const BgImageBox = styled.div`

    height: 220px;
    position: relative;
    background: ${props => props.theme.primaryColor};   
    background-size: cover;
    z-index: 0;

`;

export const Titulo = styled.div`
    color: #fff;
    font-size: 30px;
    font-weight: bold;
`;

export const Descricao = styled.div`

    color: #fff;
    font-size: 20px;

`;