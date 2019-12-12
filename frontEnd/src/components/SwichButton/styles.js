import styled from 'styled-components';

export const Switch = styled.label`

label{
  position: relative;
  display: inline-block;
  width: 74px;
  height: 37px;
}

label input { 
  opacity: 0;
  width: 0;
  height: 0;
}

span {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

span:before {
  position: absolute;
  content: "";
  height: 30px;
  width: 30px;
  left: 5px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

span {
  border-radius: 34px;
}

span:before {
  border-radius: 50%;
  
}

input:checked + span {
  background: ${props => props.theme.primaryColor};  
}

input:focus + span {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + span:before {
  -webkit-transform: translateX(35px);
  -ms-transform: translateX(35px);
  transform: translateX(35px);
}

/* Rounded sliders */


`;