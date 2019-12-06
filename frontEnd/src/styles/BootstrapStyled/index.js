import styled from 'styled-components';

export const Container = styled.div.attrs(props => ({
  className: "container clearfix"
}))``;

export const NavBar = styled.nav.attrs(props => ({
  className: "navbar px-0 navbar-expand-md navbar-light"
}))``;

export const Modal = styled.div.attrs(props => ({
  className: "modal fade",
  tabIndex: "-1",
  role: "dialog",
}))``;

export const ModalDialogSmall = styled.div.attrs(props => ({
  className: "modal-dialog modal-dialog-centered modal-sm ",
}))``;

export const ModalContent = styled.div.attrs(props => ({
  className: "modal-content",
}))``;

export const ModalHeader = styled.div.attrs(props => ({
  className: "modal-header",
}))``;

export const ModalTitle = styled.h5.attrs(props => ({
  className: "modal-title w-100 text-center",
}))``;

export const ModalBody = styled.div.attrs(props => ({
  className: "modal-body",
}))``;

export const ModalFooter = styled.div.attrs(props => ({
  className: "modal-footer",
}))``;

export const ButtonCloseModal = styled.button.attrs(props => ({
  className: "close",
  type: "button",
}))``;

export const Input = styled.input.attrs({
  className: "form-control form-control-lg"
})``;

export const CustomInput = styled.input.attrs({
  className: "custom-control-input"
})``;

export const CustomDivCheckbox = styled.div.attrs({
  className: "custom-control custom-checkbox"
})``;

export const CustomLabel = styled.label.attrs({
  className: "custom-control-label"
})``;

export const FormGroup = styled.div.attrs({
  className: "form-group"
})``;

export const Form = styled.form.attrs({
  className: "form",
  autoComplete: "off"
})``;

export const ButtonPrimary = styled.button.attrs({
  className: "btn btn-primary",
})`
   background: ${props => props.theme.primaryColor};

   &:hover {
    background: ${props => props.theme.primaryColorHover};
  }

`;

export const ButtonSecondary = styled.button.attrs({
  className: "btn btn-secondary",
})``;










