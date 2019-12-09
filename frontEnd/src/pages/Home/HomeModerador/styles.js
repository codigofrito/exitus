import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const ColumnCard = styled.div.attrs(props => ({
    className: "col-lg-4 col-md-8 mb-5 mb-lg-0 mx-auto"
}))``;

export const CardRelatorios = styled(Link).attrs(props => ({
    className: "card border-0"
}))`  
    color: #fff;
    background: #6f95b4; 
    transition: 120ms;

    &:hover{
        color: #fff;
        background: #67839a; 
        margin-top: -3px;
        text-decoration:none;     
    }
  
`;

export const CardEntrevistas = styled(Link).attrs(props => ({
    className: "card border-0"
}))`  
    color: #fff;
    background: #2092ed;  
    transition: 120ms;

    &:hover{
        color: #fff;
        background: #1b7bc7; 
        margin-top: -3px;
        text-decoration:none;     
    }
`;

export const CardEgressos = styled(Link).attrs(props => ({
    className: "card border-0 shadow-lg"
}))`  
    color: #fff;
    background: ${props => props.theme.primaryColor};  
    transition: 120ms;

    &:hover{
        color: #fff;
        background: ${props => props.theme.primaryColorHover};  
        margin-top: -3px;
        text-decoration:none;     
    }
`;




