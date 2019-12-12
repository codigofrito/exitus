import React, { Component } from 'react';

import {
    Modal,
    ModalDialogMedium,
    ModalContent,
 
} from '../../../../styles/BootstrapStyled';

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cpf: '',
            password: '',
            rememberMe: false
        };

    }

  
    render() {
        return (
            <Modal id="modal-manager-esgress">
                <ModalDialogMedium>
                    <ModalContent>
                        

                    </ModalContent>
                </ModalDialogMedium>
            </Modal>
        );
    }
}

