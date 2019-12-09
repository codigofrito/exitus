import React from 'react';

import {
	Modal,
	ModalDialogMedium,
	ModalContent,
	ModalHeader,
	ModalTitle,
	ModalBody,
	ModalFooter,
	ButtonCloseModal,
	Form,
	FormGroup,
	ButtonPrimary,
	ButtonSecondary,
	Textarea

} from '../../../styles/BootstrapStyled';

let quantidadeAlternativas = 0;

const ModalCriarPergunta = (props) => {

	return (

		<Modal id="modalCriarPergunta">
			<ModalDialogMedium>
				<ModalContent>
					<ModalHeader>
						<ModalTitle>Criar Nova Pergunta</ModalTitle>
						<ButtonCloseModal type="button" data-dismiss="modal">
							<span aria-hidden="true">&times;</span>
						</ButtonCloseModal>
					</ModalHeader>
					<ModalBody>
						<Form id="modalLoginForm" >
							<FormGroup>
								<label htmlFor="pergunta">Pergunta</label>
								<Textarea  placeholder="Insira o texto da pergunta." rows="2"></Textarea>
							</FormGroup>

							<FormGroup>
								<Textarea id={'alternativa-' + (++quantidadeAlternativas)} placeholder="Insira o texto da alternativa" rows="1" disabled></Textarea>
							</FormGroup>

							<FormGroup>
								<Textarea id={'alternativa-' + (++quantidadeAlternativas)} placeholder="Insira o texto da alternativa" rows="1" disabled></Textarea>
							</FormGroup>

							<FormGroup>
								<Textarea id={'alternativa-' + (++quantidadeAlternativas)} placeholder="Insira o texto da alternativa" rows="1" disabled></Textarea>
							</FormGroup>

							<FormGroup>
								<Textarea id={'alternativa-' + (++quantidadeAlternativas)} placeholder="Insira o texto da alternativa" rows="1" disabled></Textarea>
							</FormGroup>

							<FormGroup>
								<textarea className="form-control objetiva" id={'alternativa-' + (++quantidadeAlternativas)} placeholder="Insira o texto da alternativa" rows="1" disabled></textarea>
							</FormGroup>
						</Form>
					</ModalBody>

					<ModalFooter>
						<ButtonPrimary type="button" data-dismiss="modal">Cancelar</ButtonPrimary>
						<ButtonSecondary type="button">Salvar Pergunta</ButtonSecondary>
					</ModalFooter>

				</ModalContent>
			</ModalDialogMedium>
		</Modal>

	);
};

export default ModalCriarPergunta;
