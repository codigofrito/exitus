import styled from 'styled-components';

export const Container = styled.div.attrs(props => ({className: "container clearfix"}))``;

export const Content = styled.div`

    padding-top: 30px;
    padding-bottom: 30px;
    margin-bottom: 50px;

    .btn-primary {
        background: #3f51b5;
    }
      
    .btn-primary:hover {
        background: #314091;
    }

`;