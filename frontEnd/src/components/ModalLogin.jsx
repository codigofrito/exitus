import React from 'react';
import '../styles/main.css';


function ModalLogin() {
    return (

        <div id="modalLogin" className="modal fade " tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-sm">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title w-100 text-center">Fazer Login</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form className="form" autoComplete="off" id="modalLoginForm" >
                            <div className="form-group">
                                <label>CPF</label>
                                <input type="text" className="form-control form-control-lg" name="cpfLogin" id="cpfLogin" required />
                            </div>
                            <div className="form-group">
                                <label>Senha</label>
                                <input type="password" className="form-control form-control-lg" id="senhaLogin" required />
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="rememberMe" />
                                <label className="custom-control-label" htmlFor="rememberMe">Lembrar</label>
                            </div>
                        </form>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-primary">Entrar</button>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default ModalLogin;
