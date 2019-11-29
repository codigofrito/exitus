import React from 'react';
import '../styles/main.css';


let quantidadeAlternativas = 0;

const ModalCriarPergunta = ({ dataQuestion }) => {

    return (

        <div id="modalCriarPergunta" className="modal fade " tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title w-100 text-center">Criar Nova Pergunta</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form className="form" autoComplete="off" id="modalLoginForm" >


                            <div className="form-group">
                                <label htmlFor="pergunta">Pergunta</label>
                                <textarea value={dataQuestion.pergunta} className="form-control subjetiva" id="pergunta" placeholder="Insira o texto da pergunta." rows="2"></textarea>
                            </div>

                            <div className="form-group">
                                <textarea className="form-control subjetiva" id={"alternativa-" + (++quantidadeAlternativas)} placeholder="Insira o texto da alternativa" rows="1" disabled></textarea>
                            </div>

                            <div className="form-group">
                                <textarea className="form-control objetiva" id={"alternativa-" + (++quantidadeAlternativas)} placeholder="Insira o texto da alternativa" rows="1" disabled></textarea>
                            </div>

                            <div className="form-group">
                                <textarea className="form-control objetiva" id={"alternativa-" + (++quantidadeAlternativas)} placeholder="Insira o texto da alternativa" rows="1" disabled></textarea>
                            </div>

                            <div className="form-group">
                                <textarea className="form-control objetiva" id={"alternativa-" + (++quantidadeAlternativas)} placeholder="Insira o texto da alternativa" rows="1" disabled></textarea>
                            </div>

                            <div className="form-group">
                                <textarea className="form-control objetiva" id={"alternativa-" + (++quantidadeAlternativas)} placeholder="Insira o texto da alternativa" rows="1" disabled></textarea>
                            </div>


                        </form>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-primary">Salvar Pergunta</button>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default ModalCriarPergunta;
