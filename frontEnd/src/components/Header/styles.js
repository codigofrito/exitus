import styled from 'styled-components';

export const AppHeader = styled.div`

    background: ${props => props.theme.backgroundColor};
    border-bottom: 1px solid #eee;

    li {
        margin-top: 11px;
        font-weight: bold;
        font-size: 20px;
        border-bottom: 5px solid rgba(255,255,255,0);
    }

    li:hover {
        cursor: pointer;
        border-bottom: 5px solid #3f51b5;
    }

    li:hover .nav-link {
        color: rgba(0,0,0,.7);
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