import styled from 'styled-components';


export const Container = styled.div.attrs(props => ({
  className: "container clearfix"
}))``;

export const Navbar = styled.nav.attrs(props => ({
  className: "navbar navbar-expand-md navbar-light px-0"
}))`
  background: ${props => props.theme.backgroundColor};
`;

export const NavbarToggler = styled.a.attrs(props => ({
  className: "navbar-toggler"
}))`
    border: 0px;
    background: ${props => props.theme.backgroundColor};
`;

export const NavbarBrand = styled.div.attrs(props => ({
  className: "navbar-brand"
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

export const Input = styled.input.attrs(props => ({
  className: "form-control form-control-lg"
}))``;

export const Select = styled.select.attrs(props => ({
  className: "form-control form-control-lg"
}))``;

export const CustomInput = styled.input.attrs(props => ({
  className: "custom-control-input"
}))``;

export const CustomDivCheckbox = styled.div.attrs(props => ({
  className: "custom-control custom-checkbox"
}))``;

export const CustomLabel = styled.label.attrs(props => ({
  className: "custom-control-label"
}))``;

export const FormGroup = styled.div.attrs(props => ({
  className: props.columnGrid + " form-group"
}))``;

export const FormRow = styled.div.attrs(props => ({
  className:  props.columnGrid + " form-row"
}))``;

export const Form = styled.form.attrs(props => ({
  className: "form",
  autoComplete: "off"
}))``;

export const ButtonPrimary = styled.button.attrs(props => ({
  className: "btn btn-primary",
}))`
   background: ${props => props.theme.primaryColor};
   &:hover {
   background: ${props => props.theme.primaryColorHover};
  }
`;

export const ButtonSuccess = styled.button.attrs(props => ({
  className: "btn btn-success",
}))`
   background: ${props => props.theme.successColor};
   &:hover {
   background: ${props => props.theme.successColorHover};
  }
`;

export const ButtonSecondary = styled.button.attrs(props => ({
  className: "btn btn-secondary",
}))``;













