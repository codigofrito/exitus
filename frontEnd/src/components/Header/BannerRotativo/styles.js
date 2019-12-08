import styled from 'styled-components';

import img from '../../../assets/bannerImages/01.jpg';


export const BoxBanner = styled.div`
    height: 300px;   
    background: ${props => props.theme.primaryColor};
    background: url(${img}) no-repeat top center;
    background-size: 100% auto;
    background-size: cover;
`;

export const BoxContent = styled.div`
    height: 250px;
    display: flex;    
    justify-content: space-between;
    align-items: center;
`;

export const Button = styled.a`
    height: 30px;
    width: 30px;
    border-radius: 15px;
    background: #fff; 
    cursor: pointer;
    &:hover{
        background: #bababa;     }
`;

export const ButtonLeft = styled(Button)``;

export const ButtonRight = styled(Button)``;