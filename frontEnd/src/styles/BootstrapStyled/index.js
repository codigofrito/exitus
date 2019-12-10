import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div.attrs(props => ({
  className: "container clearfix"
}))``;

export const Navbar = styled.nav.attrs(props => ({
  className: "navbar navbar-expand-md navbar-light px-0"
}))`
  background: ${props => props.theme.backgroundColor};
`;

export const NavbarToggler = styled.div.attrs(props => ({
  className: "navbar-toggler"
}))`
    border: 0px;
    background: ${props => props.theme.backgroundColor};
`;

export const NavbarCollapse = styled.div.attrs(props => ({
  className: "navbar-collapse collapse"
}))``;

export const NavbarNavigation = styled.ul.attrs(props => ({
  className: "navbar-nav mr-auto"
}))``;

export const NavbarItem = styled.li.attrs(props => ({
  className: "nav-item"
}))`
    margin-top: 11px;
    font-weight: bold;
    font-size: 20px;
    border-bottom: 5px solid rgba(255,255,255,0); 

    &:hover {
        cursor: pointer;
        border-bottom: 5px solid ${props => props.theme.primaryColor};;

        li{
          color: rgba(0,0,0,.7);
        }
    }
`;

export const NavLink = styled(Link).attrs(props => ({
  className: "nav-link"
}))`

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

export const ModalDialogMedium = styled.div.attrs(props => ({
  className: "modal-dialog modal-dialog-centered modal-md ",
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
  className: "form-control"
}))``;

export const PlainTextInput = styled.input.attrs(props => ({
  className: "form-control-plaintext"
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
  className: props.columnGrid + " form-row"
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

export const ButtonSuccess = styled(Link).attrs(props => ({
  className: "btn btn-success",
}))`
   background: ${props => props.theme.successColor};
   &:hover {
   background: ${props => props.theme.successColorHover};
  }
`;

export const ButtonDanger = styled.button.attrs(props => ({
  className: "btn btn-danger",
}))`
   background: ${props => props.theme.dangerColor};
   &:hover {
   background: ${props => props.theme.dangerColorHover};
  }
`;

export const ButtonSecondary = styled.button.attrs(props => ({
  className: "btn btn-secondary",
}))``;

export const Table = styled.table.attrs(props => ({
  className: props.columnGrid + " table"
}))``;

export const TableColumn = styled.td.attrs(props => ({
  className: props.columnGrid
}))``;

export const TableColumnCentered = styled.td.attrs(props => ({
  className: props.columnGrid + " text-center"
}))``;

export const TableRow = styled.tr.attrs(props => ({
  className: "d-flex"
}))``;

export const TableRowClicable = styled.tr.attrs(props => ({
  className: "d-flex tr"
}))`
    cursor: pointer;  
    &:hover {
      background-color: #d8d8d8;
    }
`;

export const TableColumnHeader = styled.th.attrs(props => ({
  className: props.columnGrid
}))`
    color: #fff;
    background: ${props => props.theme.primaryColor};
`;

export const TableColumnHeaderCentered = styled.th.attrs(props => ({
  className: props.columnGrid + " text-center"
}))`
    color: #fff;
    background: ${props => props.theme.primaryColor};     
`;

export const Div = styled.div.attrs(props => ({
  className: props.columnGrid
}))``;

export const TableHead = styled.thead.attrs(props => ({
  className: "thead"
}))``;

export const TableBody = styled.tbody.attrs(props => ({
  className: "tbody"
}))``;

export const Textarea = styled.textarea.attrs(props => ({
  className: "form-control"
}))``;

export const CardBodyRight = styled.div.attrs(props => ({
  className: "card-body d-flex align-items-end flex-column text-right"
}))``;

export const Card = styled.div.attrs(props => ({
  className: "card h-100"
}))``;

export const CardBody = styled.div.attrs(props => ({
  className: "card-body"
}))``;

export const CardTitle = styled.h2.attrs(props => ({
  className: "card-title"
}))``;

export const CardFooter = styled.div.attrs(props => ({
  className: "card-footer"
}))``;


export const PrimaryColorCard = styled.div.attrs(props => ({
  className: "card text-white my-5 py-4 text-center"
}))`
    background: ${props => props.theme.primaryColor};  
`;

export const Row = styled.div.attrs(props => ({
  className: "row"
}))``;

export const CenteredRow = styled.div.attrs(props => ({
  className: "row align-items-center my-5"
}))``;

export const Paragraph = styled.p.attrs(props => ({
  className: "lead",
  align: "justify"
}))``;

export const H1Light = styled.h1.attrs(props => ({
  className: "font-weight-light",
}))``;

















