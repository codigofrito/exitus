import React from 'react';
import Axios from 'axios';
import localStorage from 'local-storage';
import { login, setCurrentUser } from '../../auth';


import {
	Modal,
	ModalDialogSmall,
	ModalContent,
	ModalHeader,
	ModalTitle,
	ModalBody,
	ModalFooter,
	ButtonCloseModal,
	Input,
	CustomInput,
	Form,
	FormGroup,
	CustomLabel,
	CustomDivCheckbox,
	ButtonPrimary,
	ButtonSecondary

} from '../../styles/BootstrapStyled';

class ModalLogin extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			cpf: '',
			password: '',
			rememberMe: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const elementName = event.target.id;
		const elementvalue = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

		this.setState({
			[elementName]: elementvalue
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		Axios.post('http://localhost:3001/auth', this.state)
			.then((result) => {
				login(result.data.token);
				setCurrentUser(result.data.user);
			})
			.catch(err => {
				
			});
	}

	render() {
		return (
			<Modal id="modalLogin">
				<ModalDialogSmall>
					<ModalContent>
						<Form id="modalLoginForm" onSubmit={this.handleSubmit} >
							<ModalHeader>
								<ModalTitle>Fazer Login</ModalTitle>
								<ButtonCloseModal data-dismiss="modal">
									<span>&times;</span>
								</ButtonCloseModal>
							</ModalHeader>

							<ModalBody>
								<FormGroup>
									<label>CPF:</label>
									<Input onChange={this.handleChange} id="cpf" type="text" required />
								</FormGroup>
								<FormGroup>
									<label>Senha:</label>
									<Input onChange={this.handleChange} id="password" type="password" required />
								</FormGroup>
								<CustomDivCheckbox>
									<CustomInput onChange={this.handleChange} type="checkbox" id="rememberMe" />
									<CustomLabel htmlFor="rememberMe">Lembrar</CustomLabel>
								</CustomDivCheckbox>
							</ModalBody>

							<ModalFooter>
								<ButtonSecondary data-dismiss="modal">Cancelar</ButtonSecondary>
								<ButtonPrimary type="submit">Entrar</ButtonPrimary>
							</ModalFooter>
						</Form>

					</ModalContent>
				</ModalDialogSmall>
			</Modal>
		);
	}
}

export default ModalLogin;
