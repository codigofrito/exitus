import React from 'react';


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
	Form,
	FormGroup,
	ButtonPrimary,
	ButtonSecondary

} from '../../styles/BootstrapStyled';

class ModalSolicita extends React.Component {

	render() {
		return (
			<Modal id="modalSolicita">
				<ModalDialogSmall>
					<ModalContent>
						<Form >
							<ModalHeader>
								<ModalTitle>Solicitação</ModalTitle>
								<ButtonCloseModal data-dismiss="modal">
									<span>&times;</span>
								</ButtonCloseModal>
							</ModalHeader>

							<ModalBody>
								<FormGroup>
									<label> Preencher os campos abaixo</label>
								</FormGroup>
								<FormGroup>
									<label>CPF:</label>
									<Input   type="text" />
								</FormGroup>
								<FormGroup>
									<label>Nome Completo:</label>
									<Input   type="text" />
								</FormGroup>
								<FormGroup>
									<label>Instituição:</label>
									<Input   type="text" />
								</FormGroup>
								<FormGroup>
									<label>Curso:</label>
									<Input   type="text" />
								</FormGroup>
								<FormGroup>
									<label>Email:</label>
									<Input   type="text" />
								</FormGroup>
							</ModalBody>

							<ModalFooter>
								<ButtonSecondary data-dismiss="modal">Retornar</ButtonSecondary>
								<ButtonPrimary href="/" >Enviar</ButtonPrimary>
							</ModalFooter>
						</Form>

					</ModalContent>
				</ModalDialogSmall>
			</Modal>
		);
	}
}

export default ModalSolicita;
