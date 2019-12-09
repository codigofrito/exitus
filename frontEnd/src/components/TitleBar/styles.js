import styled from 'styled-components';
import fundo from "../../assets/fundo.svg";

export const Ondas = styled.img.attrs(props => ({
}))`
    position: relative;
    margin-top: -90px; 
    width: 100%
`;

export const BgImageBox = styled.div`

    height: 220px;
    position: relative;
    background: ${props => props.theme.primaryColor};   
    background-image: url("https://startbootstrap.com/assets/img/overlay.svg"),linear-gradient(45deg,${props => props.theme.primaryColor} 0%,#006fe6 100%);
    background-size: cover;
    z-index: 0;
    padding: 1rem 0 4rem;

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