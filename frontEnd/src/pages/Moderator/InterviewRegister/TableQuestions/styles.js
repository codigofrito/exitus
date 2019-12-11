import styled from 'styled-components';


export const Table = styled.table.attrs(props => ({ className: "table table-striped table-hover" }))`

 .thead-dark th {
    color: #fff;
    background-color:#3f51b5;
    border-color:  #3f51b5;
    }
       

table.table-hover tbody tr:hover {
    background-color: #cae4ff; 
    cursor: pointer;
  }

`;