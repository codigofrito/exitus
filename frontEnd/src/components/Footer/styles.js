import styled from 'styled-components';



export const AppFooter = styled.div`
    position: absolute;
    background: ${props => props.theme.primaryColor};
    bottom: 0;
    width: 100%;
    font-size: 14px;

    /* Valor Fixo do Footer, tem que ser o mesmo do botton no body */
    height: 50px;
    line-height: 50px; 
    text-align: center;
    color: #fff;
    font-weight : bold;      
`;
