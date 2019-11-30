import styled from 'styled-components';

export const Modal = styled.div.attrs(props => ({
    className: "modal fade", id: "modalLogin", tabIndex: "-1", role: "dialog", 'aria-hidden': "true"
}))`

.modal-dialog {
    -webkit-transform: translate(0,-20%);
    -o-transform: translate(0,-20%);
    transform: translate(0,-20%);
    top: 20%;
    margin: 0 auto;
  }

`;


