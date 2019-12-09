import styled from 'styled-components';
import { Link } from 'react-router-dom';

import EgressoImg from "../../../assets/icones/egresso.png"
import EntrevistaImg from "../../../assets/icones/entrevista.png"
import RelatorioImg from "../../../assets/icones/relatorio.png"

export const ColumnCard = styled.div.attrs(props => ({
    className: "col-lg-4 col-md-8 mb-5 mb-lg-0 mx-auto"
}))``;

export const Card = styled(Link).attrs(props => ({
    className: "card border-0"
}))`  
    color: #fff;
    background: #6f95b4; 
    transition: 120ms;
    heigh: 220px;

    &:hover{
        color: #fff;
        background: #67839a; 
        margin-top: -3px;
        text-decoration:none;     
    }
  
`;

export const CardRelatorios = styled(Card)`  
    color: #fff;
    background: #6f95b4; 
    background-image: url(${RelatorioImg}); 
    background-size: 200px auto;
    background-repeat: no-repeat;
    background-position: 10px -30px;   
    transition: 120ms;
    

    &:hover{
        color: #fff;
        background: #67839a; 
        background-image: url(${RelatorioImg}); 
        background-size: 200px auto;
        background-repeat: no-repeat;
        background-position: 10px -30px;   
        transition: 120ms;
    }
  
`;

export const CardEntrevistas = styled(Card)`  
    color: #fff;
    background: #2092ed; 
    background-image: url(${EntrevistaImg}); 
    background-size: 200px auto;
    background-repeat: no-repeat;
    background-position: 10px -30px;
    transition: 120ms;

    &:hover{
        color: #fff;
        background: #1b7bc7; 
        background-image: url(${EntrevistaImg}); 
        background-size: 200px auto;
        background-repeat: no-repeat;
        background-position: 10px -30px;
        transition: 120ms;
    }
  
`;



export const CardEgressos = styled(Card)`  
    color: #fff;
    background: #1664a2; 
    background-image: url(${EgressoImg}); 
    background-size: 200px auto;
    background-repeat: no-repeat;
    background-position: 10px -30px;   
    transition: 120ms;

    &:hover{
        color: #fff;
        background: #125488; 
        background-image: url(${EgressoImg}); 
        background-size: 200px auto;
        background-repeat: no-repeat;
        background-position: 10px -30px;

    }
  
`;




