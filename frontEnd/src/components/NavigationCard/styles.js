import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { Link } from 'react-router-dom';

export const ColumnCard = styled.div.attrs(props => ({
    className: "col-lg-4 col-md-12 mb-5 mb-lg-12 mx-auto"
}))``;



export const Card = styled(Link).attrs(props => ({
    className: "card border-0"
}))`  

    color: ${props => props.fontColor};
    background: ${props => props.backgroundColor}; 
    transition: 120ms;
    height: 150px;
    background-image: url(${props => props.backgroundImage});
    background-size: 200px auto;
    background-repeat: no-repeat;
    background-position: 10px -30px;
    

    &:hover{
        color: ${props => props.fontColor};
        background-color: ${props => darken(0.1, props.backgroundColor)}; 
        background-image: url(${props => props.backgroundImage}); 
        background-size: 200px auto;
        background-repeat: no-repeat;
        background-position: 10px -30px;  
        margin-top: -3px;
        text-decoration:none;         
    }
  
`;