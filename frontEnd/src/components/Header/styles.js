import styled from 'styled-components';

export const NavBar = styled.nav.attrs(props => ({ className: "navbar navbar-expand-md navbar-light" }))``;

export const AppHeader = styled.div`

    background: #fff;
    border-bottom: 1px solid #eee;
    font-size: 14px;
    height: 70px;

    .btn-primary {
        background: #3f51b5;
    }
      
    .btn-primary:hover {
        background: #314091;
    }

    #logo {
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
      }
      
`;